import 'package:dart_web_components/dart_web_components.dart';

class HelloWorld extends WebComponent {
  @override
  void connectedCallback() {
    super.connectedCallback();
    element.innerText = "Hello World!";
  }
}
