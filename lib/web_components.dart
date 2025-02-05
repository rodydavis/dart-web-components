import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:signals_core/signals_core.dart';
import 'package:web/web.dart';

extension type CustomElement._(HTMLElement element) implements HTMLElement {
  external void connectedCallback();

  external void disconnectedCallback();

  external void adoptedCallback();

  external void attributeChangedCallback(
    String name,
    String? oldValue,
    String? newValue,
  );
}

@JS()
external void createDartWebComponent(
  JSString name,
  JSFunction construct,
  JSString observedAttributes,
  JSObject obj,
);

class WebComponentRegistry {
  static final instance = WebComponentRegistry();
  static final instances = <HTMLElement, WebComponent>{};
  JSObject? module;

  void define(String tag, WebComponent Function() f) {
    final tagName = tag.toJS;

    CustomElement construct(HTMLElement element) {
      final ref = instances.putIfAbsent(element, f);
      final el = CustomElement._(element);
      ref.element = el;
      return el;
    }

    final constructor = construct.toJS;
    final root = f();
    final observedAttributes = root.observedAttributes.join(',').toJS;
    final obj = root.toJSBox;

    obj['connectedCallback'] = (HTMLElement el) {
      instances[el]?.connectedCallback();
    }.toJS;

    obj['disconnectedCallback'] = (HTMLElement el) {
      instances[el]?.disconnectedCallback();
    }.toJS;

    obj['adoptedCallback'] = (HTMLElement el) {
      instances[el]?.adoptedCallback();
    }.toJS;

    obj['attributeChangedCallback'] = (
      HTMLElement el,
      JSString name,
      JSString? oldValue,
      JSString? newValue,
    ) {
      instances[el]?.attributeChangedCallback(
        name.toDart,
        oldValue?.toDart,
        newValue?.toDart,
      );
    }.toJS;

    createDartWebComponent(tagName, constructor, observedAttributes, obj);
  }
}

@JSExport()
class WebComponent {
  late final HTMLElement element;

  void connectedCallback() {}

  void disconnectedCallback() {}

  void adoptedCallback() {}

  void attributeChangedCallback(
    String name,
    String? oldValue,
    String? newValue,
  ) {}

  List<String> get observedAttributes => [];

  T getRoot<T extends Node>(HTMLElement instance) {
    final element = instance;
    final hasShadow = element.shadowRoot != null;
    return (hasShadow ? element.shadowRoot! : element) as T;
  }
}

mixin CleanupWebComponent on WebComponent {
  final cleanup = <void Function()>[];

  @override
  void disconnectedCallback() {
    super.disconnectedCallback();
    for (final cleanup in cleanup) {
      cleanup();
    }
  }
}

mixin WithShadowDom on WebComponent {
  @override
  T getRoot<T extends Node>(HTMLElement instance) {
    if (element.shadowRoot == null) {
      element.attachShadow(ShadowRootInit(mode: 'open')) as T;
    }
    return super.getRoot(instance);
  }
}

mixin WithAdoptedStyles on WithShadowDom, CleanupWebComponent {
  ReadonlySignal<List<CSSStyleSheet>> sheets = listSignal([]);

  @override
  void connectedCallback() {
    super.connectedCallback();
    cleanup.add(effect(() {
      getRoot<ShadowRoot>(element).adoptedStyleSheets = sheets().toJS;
    }));
  }
}

mixin ReactiveAttributes on WebComponent {
  final attrs = mapSignal(<String, String?>{});

  @override
  void attributeChangedCallback(String name, String? oldValue, String? newValue) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if (observedAttributes.contains(name)) {
      attrs[name] = newValue;
    }
  }

  @override
  void connectedCallback() {
    super.connectedCallback();
    for (final attr in observedAttributes) {
      attrs[attr] = element.getAttribute(attr);
    }
  }

  Computed<String?> attr(String name) {
    return attrs.select((e) => e.value[name]);
  }
}
