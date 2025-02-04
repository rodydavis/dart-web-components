import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:web/web.dart';

extension type CustomElement._(HTMLElement element) implements HTMLElement {
  external void connectedCallback();

  external void disconnectedCallback();

  external void attributeChangedCallback(
    String name,
    String oldValue,
    String newValue,
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

    obj['attributeChangedCallback'] = (
      HTMLElement el,
      String name,
      String oldValue,
      String newValue,
    ) {
      instances[el]?.attributeChangedCallback(name, oldValue, newValue);
    }.toJS;

    createDartWebComponent(tagName, constructor, observedAttributes, obj);
  }
}

@JSExport()
class WebComponent {
  late final HTMLElement element;

  void connectedCallback() {}

  void disconnectedCallback() {}

  void attributeChangedCallback(
    String name,
    String oldValue,
    String newValue,
  ) {}

  List<String> get observedAttributes => [];
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
