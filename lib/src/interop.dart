import 'dart:js_interop';

import 'package:web/web.dart';

extension type CustomElement(HTMLElement element) implements HTMLElement {
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
