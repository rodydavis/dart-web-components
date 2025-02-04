import '/wc.dart';

class HelloWorld extends WebComponent {
  @override
  void connectedCallback() {
    super.connectedCallback();
    element.innerText = "Hello World!";
  }
}
