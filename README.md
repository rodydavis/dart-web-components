# Dart Web Components

How to create [web components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) with Dart that compile to WASM and JS.

You can use them in any framework or library that supports HTML.

## Getting Started

### 1. Extend the WebComponent class

```dart
import 'package:web_components/web_components.dart';

class MyComponent extends WebComponent {
  ...
}
```

### 2. Define the component

Use the connectedCallback to define the component setup logic instead of the constructor.

```dart
import 'package:web_components/web_components.dart';

class MyComponent extends WebComponent {
  @override
  void connectedCallback() {
    element.innerText = "Hello World!";
  }
}
```

### 3. Register the component

```dart
import 'package:web_components/web_components.dart';
...

void main() {
  WebComponent.define('my-component', MyComponent.new);
}
```

## Mixins

There are some helper mixins to make it easier to work with web components.

### WebComponentCleanupMixin

This mixin adds an array of callbacks that will be disposed when the component is disconnected.

```dart
import 'package:web_components/web_components.dart';
import 'package:web_components/helpers.dart';

class MyComponent extends WebComponent with WebComponentCleanupMixin {
  @override
  void connectedCallback() {
    this.cleanup.add(() => print('cleaned up!'));
  }
}
```

### WebComponentShadowDomMixin

This mixin adds a shadow root to the component.

```dart
import 'package:web_components/web_components.dart';
import 'package:web_components/helpers.dart';

class MyComponent extends WebComponent with WebComponentShadowDomMixin {
  @override
  void connectedCallback() {
    getRoot<ShadowRoot>().innerHtml = '<h1>Hello World</h1>';
  }
}
```

### WebComponentAdoptedStylesMixin

This mixin adds adopted styles to the component. This only works with the shadow dom.

```dart
import 'package:web_components/web_components.dart';
import 'package:web_components/helpers.dart';
import 'package:signals_core/signals_core.dart';

class MyComponent extends WebComponent with WebComponentShadowDomMixin, WebComponentAdoptedStylesMixin {
  @override
  final sheets = computed<List<CSSStyleSheet>>(() {
    final sheet = CSSStyleSheet();
    sheet.replaceSync('h1 { color: red; }');
    return [sheet];
  });

  @override
  void connectedCallback() {
    getRoot<ShadowRoot>().innerHtml = '<h1>Hello World</h1>';
  }
}
```

### WebComponentReactiveAttributesMixin

This mixin adds reactive attributes to the component.

```dart
import 'package:web_components/web_components.dart';
import 'package:web_components/helpers.dart';
import 'package:signals_core/signals_core.dart';

class MyComponent extends WebComponent with WebComponentReactiveAttributesMixin {
  @override
  List<String> observedAttributes = ['name'];

  final src = attr('name');

  @override
  void connectedCallback() {
    cleanup.add(effect((){
      element.innerHtml = '<h1>Hello $src</h1>';
    }));
  }
}
```

## Links

- [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Are web components used a lot?](https://arewebcomponentsathingyet.com)
