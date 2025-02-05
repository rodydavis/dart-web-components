import 'package:web/web.dart';
import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'web_component.dart';
import 'interop.dart';

class WebComponentRegistry {
  static final instance = WebComponentRegistry();
  static final instances = <HTMLElement, WebComponent>{};
  JSObject? module;

  void define(String tag, WebComponent Function() f) {
    final tagName = tag.toJS;

    CustomElement construct(HTMLElement element) {
      final ref = instances.putIfAbsent(element, f);
      final el = CustomElement(element);
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
