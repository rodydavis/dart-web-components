import 'dart:js_interop';

import 'package:signals/signals_core.dart';
import 'package:web/web.dart';

import '/wc.dart';

class XCounter extends WebComponent with CleanupWebComponent {
  final count = signal(0);
  late final template = computed(() => "<button>$count</button>");

  Node getRoot(HTMLElement instance) {
    final element = instance;
    final hasShadow = element.shadowRoot != null;
    return hasShadow ? element.shadowRoot! : element;
  }

  @override
  void connectedCallback() {
    super.connectedCallback();
    final root = getRoot(element);

    final onClick = (Event e) {
      count.value++;
    }.toJS;
    root.addEventListener("click", onClick);

    cleanup.add(effect(() {
      (root as HTMLElement).innerHTML = template().toJS;
    }));
  }
}
