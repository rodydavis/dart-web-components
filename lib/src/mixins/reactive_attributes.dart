import 'package:signals_core/signals_core.dart';

import '../web_component.dart';

mixin ReactiveAttributes on WebComponent {
  final attrs = mapSignal(<String, String?>{});

  @override
  void attributeChangedCallback(
    String name,
    String? oldValue,
    String? newValue,
  ) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if (observedAttributes.contains(name)) {
      attrs[name] = newValue;
    }
  }

  @override
  void connectedCallback() {
    super.connectedCallback();
    for (final attr in observedAttributes) {
      attrs[attr] = element.getAttribute(attr);
    }
  }

  Computed<String?> attr(String name) {
    return attrs.select((e) => e.value[name]);
  }
}
