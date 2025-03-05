import 'package:web/web.dart';

import '../web_component.dart';

mixin WebComponentShadowDomMixin on WebComponent {
  ShadowRootInit get shadowOptions => ShadowRootInit(mode: 'open');

  ShadowRoot get root {
    if (element.shadowRoot == null) {
      element.attachShadow(shadowOptions);
    }
    return element.shadowRoot!;
  }
}
