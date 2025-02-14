import 'package:signals_core/signals_core.dart';

import '../web_component.dart';

mixin WebComponentReactiveAttributesMixin on WebComponent {
  final _attrs = <String, Signal<String?>>{};

  @override
  void attributeChangedCallback(
    String name,
    String? oldValue,
    String? newValue,
  ) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if (observedAttributes.contains(name)) {
      if (_attrs.containsKey(name)) {
        _attrs[name]!.value = newValue;
      }
    }
  }

  ReadonlySignal<String?> attr(
    String name, {
    String? defaultValue,
  }) {
    if (!_attrs.containsKey(name)) {
      final value = element.getAttribute(name) ?? defaultValue;
      _attrs[name] = signal(value);
    }
    return _attrs[name]!;
  }
}
