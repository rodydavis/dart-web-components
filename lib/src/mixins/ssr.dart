import 'dart:js_interop';

import 'package:html_web_components/html_web_components.dart';
import 'package:web/web.dart';
import 'package:xml/xml.dart' as xml;

import 'shadow_dom.dart';

class MyElement extends WebComponent with WebComponentShadowDomMixin, WebComponentSSRMixin {
  @override
  String styles() {
    return '';
  }

  @override
  String template(Map<String, String?> attributes) {
    return '';
  }

  @override
  void connectedCallback() {
    super.connectedCallback();
    // todo: set up event listeners
  }
}

mixin WebComponentSSRMixin on WebComponentShadowDomMixin {
  String template(Map<String, String?> attributes);

  String styles();

  @override
  void connectedCallback() {
    super.connectedCallback();
    internals ??= element.attachInternals();
    var root = internals?.shadowRoot;
    if (root == null) {
      root = element.attachShadow(shadowOptions);
      final attributes = <String, String?>{};
      for (var i = 0; i < element.attributes.length; i++) {
        final attr = element.attributes.item(i);
        if (attr == null) continue;
        attributes[attr.name] = attr.value;
      }
      root.innerHTML = template(attributes).toJS;
      final style = styles();
      if (style.isNotEmpty) {
        final sheet = CSSStyleSheet();
        sheet.replaceSync(style);
        root.adoptedStyleSheets = [sheet].toJS;
      }
    }
  }
}

String ssr(String src, Map<String, WebComponentSSRMixin> components) {
  final doc = xml.XmlDocument.parse(src);
  for (final target in components.entries) {
    final elements = doc.findAllElements(target.key);
    final c = target.value;
    final t = xml.XmlElement.tag(
      'template',
      attributes: [
        xml.XmlAttribute(
          xml.XmlName.fromString('shadowrootmode'),
          c.shadowOptions.mode,
        ),
      ],
      children: [
        xml.XmlElement.tag(
          'style',
          children: [
            xml.XmlText(c.styles()),
          ],
        ),
      ],
    );
    for (final el in elements) {
      final attributes = <String, String?>{};
      for (final attr in el.attributes) {
        attributes[attr.name.local] = attr.value;
      }
      final target = t.copy();
      target.children.add(
        xml.XmlDocumentFragment.parse(c.template(attributes)).copy(),
      );
      el.children.insert(0, target);
    }
  }
  return doc.toXmlString();
}
