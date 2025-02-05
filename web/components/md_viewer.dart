import 'dart:js_interop';

import 'package:web_components/web_components.dart';
import 'package:signals_core/signals_core.dart';
import 'package:http/http.dart' as http;
import 'package:markdown/markdown.dart';
import 'package:web/web.dart';

class MarkdownView extends WebComponent
    with CleanupWebComponent, ReactiveAttributes, WithShadowDom {
  http.Client client = http.Client();

  @override
  List<String> get observedAttributes => ['src'];

  late final src = attr('src');

  late final md = computedAsync(() async {
    final src = this.src.value ?? '';
    if (src.isEmpty) return null;
    return client.get(Uri.parse(src));
  });

  late final html = computed(() {
    final val = md.value.value?.body ?? '';
    if (val.isEmpty) return '';
    return markdownToHtml(val);
  });

  @override
  void connectedCallback() {
    super.connectedCallback();
    cleanup.add(effect(() {
      getRoot<ShadowRoot>(element).innerHTML = html.value.toJS;
    }));
  }
}
