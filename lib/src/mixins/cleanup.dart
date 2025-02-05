import '../web_component.dart';

mixin CleanupWebComponent on WebComponent {
  final cleanup = <void Function()>[];

  @override
  void disconnectedCallback() {
    super.disconnectedCallback();
    for (final cleanup in cleanup) {
      cleanup();
    }
  }
}
