import 'package:web_components/web_components.dart';

class HelloWorld extends WebComponent {
  @override
  void connectedCallback() {
    super.connectedCallback();
    element.innerText = "Hello World!";
  }
}
