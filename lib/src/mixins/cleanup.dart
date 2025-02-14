import '../web_component.dart';

mixin WebComponentCleanupMixin on WebComponent {
  final cleanup = <void Function()>[];

  @override
  void disconnectedCallback() {
    super.disconnectedCallback();
    for (final cleanup in cleanup) {
      cleanup();
    }
  }
}
