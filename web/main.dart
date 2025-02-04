import 'package:dart_web_components/dart_web_components.dart';

import 'components/hello_world.dart';
import 'components/x_counter.dart';

void main() {
  final registry = WebComponentRegistry.instance;
  registry.define('hello-world', HelloWorld.new);
  registry.define('x-counter', XCounter.new);
}
