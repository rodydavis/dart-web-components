import 'package:web/web.dart';

import '../web_component.dart';

mixin WithShadowDom on WebComponent {
  @override
  T getRoot<T extends Node>() {
    if (element.shadowRoot == null) {
      element.attachShadow(ShadowRootInit(mode: 'open')) as T;
    }
    return super.getRoot();
  }
}
