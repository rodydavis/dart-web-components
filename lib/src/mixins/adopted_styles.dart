import 'dart:js_interop';

import 'package:signals_core/signals_core.dart';
import 'package:web/web.dart';

import 'cleanup.dart';
import 'shadow_dom.dart';

sealed class CssStyles {
  CSSStyleSheet toSheet();
}

class Css implements CssStyles {
  final ReadonlySignal<String> data;

  Css(this.data);

  Css.fromString(String value) : data = signal(value);

  @override
  CSSStyleSheet toSheet() {
    final sheet = CSSStyleSheet();
    data.subscribe((value) {
      sheet.replaceSync(value);
    });
    return sheet;
  }
}

mixin WebComponentAdoptedStylesMixin
    on WebComponentShadowDomMixin, WebComponentCleanupMixin {
  ReadonlySignal<List<CssStyles>> sheets = listSignal([]);

  @override
  void connectedCallback() {
    super.connectedCallback();
    cleanup.add(effect(() {
      getRoot<ShadowRoot>().adoptedStyleSheets = [
        for (var sheet in sheets.peek()) sheet.toSheet(),
      ].toJS;
    }));
  }
}
