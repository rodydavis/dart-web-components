import 'package:web/web.dart';

class WebComponent {
  late final HTMLElement element;

  void connectedCallback() {}

  void disconnectedCallback() {}

  void adoptedCallback() {}

  void attributeChangedCallback(
    String name,
    String? oldValue,
    String? newValue,
  ) {}

  List<String> get observedAttributes => [];

  T getRoot<T extends Node>(HTMLElement instance) {
    final element = instance;
    final hasShadow = element.shadowRoot != null;
    return (hasShadow ? element.shadowRoot! : element) as T;
  }
}
