import 'dart:js_interop';

import 'package:web/web.dart';

import '../web_component.dart';

mixin WebComponentShadowDomMixin on WebComponent {
  ShadowRootInit get shadowOptions => ShadowRootInit(mode: 'open');

  @override
  R getRoot<R extends JSObject>() {
    if (element.shadowRoot == null) {
      element.attachShadow(shadowOptions) as R;
    }
    return super.getRoot();
  }
}
