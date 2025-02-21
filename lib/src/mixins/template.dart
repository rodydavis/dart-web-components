import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:signals_core/signals_core.dart';
import 'package:web/web.dart';

import '../web_component.dart';

sealed class SignalsNode {
  Node toNode();
}

class TextNode extends SignalsNode {
  final ReadonlySignal<String> data;

  TextNode(this.data);

  @override
  Node toNode() {
    final text = Text(data.value);
    data.subscribe((value) {
      if (text.data != value) {
        text.text = value;
      }
    });
    return text;
  }
}

class ElementNode extends SignalsNode {
  final String tag;
  final MapSignal<String, ReadonlySignal<String?>> attributes;
  final MapSignal<String, ReadonlySignal<Object?>> properties;
  final MapSignal<String, void Function(Event)> events;
  final ListSignal<SignalsNode> children;
  void Function(Element)? onCreate;

  ElementNode(
    this.tag, {
    Map<String, ReadonlySignal<String?>> attributes = const {},
    Map<String, ReadonlySignal<Object?>> properties = const {},
    Map<String, void Function(Event)> events = const {},
    List<SignalsNode> children = const [],
    this.onCreate,
  })  : children = ListSignal(List.from(children)),
        attributes = MapSignal(Map.from(attributes)),
        properties = MapSignal(Map.from(properties)),
        events = MapSignal(Map.from(events));

  @override
  Node toNode() {
    final element = document.createElement(tag);
    attributes.subscribe((items) {
      items.forEach((key, value) {
        value.subscribe((val) {
          if (val is String) {
            element.setAttribute(key, val);
          } else {
            element.removeAttribute(key);
          }
        });
      });
    });
    properties.subscribe((items) {
      items.forEach((key, value) {
        value.subscribe((val) {
          element[key] = val?.jsify();
        });
      });
    });
    events.subscribe((items) {
      items.forEach((key, value) {
        element.addEventListener(key, value.toJS);
      });
    });
    children.subscribe((items) {
      element.innerHTML = ''.toJS;
      for (var child in items) {
        element.append(child.toNode());
      }
    });
    onCreate?.call(element);
    return element;
  }
}

class SignalsTemplate extends SignalsNode {
  final List<SignalsNode> children;

  SignalsTemplate(this.children);

  @override
  Node toNode() {
    final fragment = document.createDocumentFragment();
    for (var child in children) {
      fragment.append(child.toNode());
    }
    return fragment;
  }
}

TextNode text(ReadonlySignal<String> data) {
  return TextNode(data);
}

ElementNode tag(
  String tag, {
  Map<String, ReadonlySignal<String?>> attributes = const {},
  Map<String, ReadonlySignal<Object?>> properties = const {},
  Map<String, void Function(Event)> events = const {},
  List<SignalsNode> children = const [],
}) {
  return ElementNode(
    tag,
    attributes: attributes,
    properties: properties,
    events: events,
    children: children,
  );
}

mixin WebComponentSignalsNodeMixin on WebComponent {
  Iterable<SignalsNode> build();

  @override
  void connectedCallback() {
    super.connectedCallback();
    for (final node in build()) {
      append(node.toNode());
    }
  }
}
