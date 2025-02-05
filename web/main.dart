import 'package:web_components/web_components.dart';

import 'components/hello_world.dart';
import 'components/x_counter.dart';
import 'components/md_viewer.dart';
import 'components/md_editor.dart';

void main() {
  final registry = WebComponentRegistry.instance;
  registry.define('hello-world', HelloWorld.new);
  registry.define('x-counter', XCounter.new);
  registry.define('md-viewer', MarkdownView.new);
  registry.define('md-editor', MarkdownEditor.new);
}
