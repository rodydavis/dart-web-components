// ignore_for_file: non_constant_identifier_names

import 'package:html_web_components/html_web_components.dart';
import 'package:html_web_components/template.dart';
import 'package:html_web_components/helpers.dart';
import 'package:signals_core/signals_core.dart';

class Counter extends WebComponent
    with
        WebComponentCleanupMixin,
        WebComponentShadowDomMixin,
        WebComponentAdoptedStylesMixin,
        WebComponentSignalsNodeMixin {
  @override
  late final sheets = computed(() => [Css(style)]);

  late final style = computed(() => '''
  .counter {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
  }
  ''');

  final count = signal(0);
  late final countStr = computed(() => count.toString());

  @override
  Iterable<SignalsNode> build() sync* {
    yield tag(
      'div',
      attributes: {'class': readonly('counter')},
      children: [
        DecButton(count),
        TextNode(countStr),
        IncButton(count),
      ],
    );
  }
}

ElementNode IncButton(Signal<int> counter) {
  final disabled = computed(() => counter.value < 10);
  final disabledStr = computed(() => disabled.value ? null : '');
  return ElementNode(
    'button',
    attributes: {
      'disabled': disabledStr,
    },
    children: [TextNode(readonly('+'))],
    events: {'click': (e) => counter.value++},
  );
}

ElementNode DecButton(Signal<int> counter) {
  final disabled = computed(() => counter.value > 0);
  final disabledStr = computed(() => disabled.value ? null : '');
  return ElementNode(
    'button',
    attributes: {
      'disabled': disabledStr,
    },
    children: [TextNode(readonly('-'))],
    events: {'click': (e) => counter.value--},
  );
}
