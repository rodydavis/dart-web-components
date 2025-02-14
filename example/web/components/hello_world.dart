import 'package:html_web_components/html_web_components.dart';

class HelloWorld extends WebComponent {
  @override
  void connectedCallback() {
    super.connectedCallback();
    element.innerText = "Hello World!";
  }
}
