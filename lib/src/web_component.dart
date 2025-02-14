import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:web/web.dart';

class WebComponent {
  late HTMLElement element;

  void connectedCallback() {}

  void disconnectedCallback() {}

  void adoptedCallback() {}

  void attributeChangedCallback(
    String name,
    String? oldValue,
    String? newValue,
  ) {}

  Iterable<String> get observedAttributes => [];

  T getRoot<T extends Node>() {
    final hasShadow = element.shadowRoot != null;
    return (hasShadow ? element.shadowRoot! : element) as T;
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
  final elemProto = globalContext['HTMLElement'] as JSObject;
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

  final observedAttributes = create().observedAttributes;

  obj['prototype'] = elemProto['prototype'];
  obj['observedAttributes'] = observedAttributes.toList().jsify()!;

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
