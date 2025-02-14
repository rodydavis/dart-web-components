import 'dart:js_interop';

import 'package:signals_core/signals_core.dart';
import 'package:web/web.dart';
import 'package:web_components/web_components.dart';

class XCounter extends WebComponent with CleanupWebComponent {
  final count = signal(0);
  late final template = computed(() => "<button>$count</button>");

  void _onClick(Event e) {
    count.value++;
  }

  @override
  void connectedCallback() {
    super.connectedCallback();
    final root = getRoot<HTMLElement>();

    root.addEventListener("click", _onClick.toJS);

    cleanup.add(effect(() {
      root.innerHTML = template().toJS;
    }));
  }
}
