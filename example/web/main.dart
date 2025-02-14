import 'package:html_web_components/html_web_components.dart';

import 'components/hello_world.dart';
import 'components/x_counter.dart';
import 'components/md_viewer.dart';
import 'components/md_editor.dart';

void main() {
  WebComponent.define('hello-world', HelloWorld.new);
  WebComponent.define('x-counter', XCounter.new);
  WebComponent.define('md-viewer', MarkdownView.new);
  WebComponent.define('md-editor', MarkdownEditor.new);
}
