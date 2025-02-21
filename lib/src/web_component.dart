import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:web/web.dart';

class WebComponent<T extends HTMLElement> {
  late T element;
  final String extendsType = 'HTMLElement';

  void connectedCallback() {}

  void disconnectedCallback() {}

  void adoptedCallback() {}

  void attributeChangedCallback(
    String name,
    String? oldValue,
    String? newValue,
  ) {}

  Iterable<String> get observedAttributes => [];

  bool get formAssociated => false;

  ElementInternals? get internals => element['_internals'] as ElementInternals?;
  set internals(ElementInternals? value) {
    element['_internals'] = value;
  }

  R getRoot<R extends JSObject>() {
    final hasShadow = element.shadowRoot != null;
    return (hasShadow ? element.shadowRoot! : element) as R;
  }

  void append(Node node) {
    final hasShadow = element.shadowRoot != null;
    if (hasShadow) {
      getRoot<ShadowRoot>().append(node);
    } else {
      getRoot<HTMLElement>().append(node);
    }
  }

  static void define(String tag, WebComponent Function() create) {
    final obj = _factory(create);
    window.customElements.define(tag, obj);
  }
}

@JS('Reflect.construct')
external JSAny _reflectConstruct(
  JSObject target,
  JSAny args,
  JSFunction constructor,
);

final _instances = <HTMLElement, WebComponent>{};

JSFunction _factory(WebComponent Function() create) {
  final base = create();
  final elemProto = globalContext[base.extendsType] as JSObject;
  late JSAny obj;

  JSAny constructor() {
    final args = <String>[].jsify()!;
    final self = _reflectConstruct(elemProto, args, obj as JSFunction);
    final el = self as HTMLElement;
    _instances.putIfAbsent(el, () => create()..element = el);
    return self;
  }

  obj = constructor.toJS;
  obj = obj as JSObject;

  final observedAttributes = base.observedAttributes;
  final formAssociated = base.formAssociated;

  obj['prototype'] = elemProto['prototype'];
  obj['observedAttributes'] = observedAttributes.toList().jsify()!;
  obj['formAssociated'] = formAssociated.jsify()!;

  final prototype = obj['prototype'] as JSObject;
  prototype['connectedCallback'] = (HTMLElement instance) {
    _instances[instance]?.connectedCallback();
  }.toJSCaptureThis;
  prototype['disconnectedCallback'] = (HTMLElement instance) {
    _instances[instance]?.disconnectedCallback();
    _instances.remove(instance);
  }.toJSCaptureThis;
  prototype['adoptedCallback'] = (HTMLElement instance) {
    _instances[instance]?.adoptedCallback();
  }.toJSCaptureThis;
  prototype['attributeChangedCallback'] = (
    HTMLElement instance,
    String name,
    String? oldName,
    String? newName,
  ) {
    _instances[instance]?.attributeChangedCallback(name, oldName, newName);
  }.toJSCaptureThis;

  return obj as JSFunction;
}
