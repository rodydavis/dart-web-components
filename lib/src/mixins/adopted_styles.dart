import 'dart:js_interop';

import 'package:signals_core/signals_core.dart';
import 'package:web/web.dart';

import 'cleanup.dart';
import 'shadow_dom.dart';

mixin WithAdoptedStyles on WithShadowDom, CleanupWebComponent {
  ReadonlySignal<List<CSSStyleSheet>> sheets = listSignal([]);

  @override
  void connectedCallback() {
    super.connectedCallback();
    cleanup.add(effect(() {
      getRoot<ShadowRoot>().adoptedStyleSheets = sheets().toJS;
    }));
  }
}
