import 'package:signals_core/signals_core.dart';

import '../web_component.dart';

mixin ReactiveAttributes on WebComponent {
  final attrs = <String, Signal<String?>>{};

  @override
  void attributeChangedCallback(
    String name,
    String? oldValue,
    String? newValue,
  ) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if (observedAttributes.contains(name)) {
      if (attrs.containsKey(name)) {
        attrs[name]!.value = newValue;
      }
    }
  }

  ReadonlySignal<String?> attr(String name) {
    if (!attrs.containsKey(name)) {
      attrs[name] = signal(element.getAttribute(name));
    }
    return attrs[name]!;
  }
}
