/**
 * @param {string} tag
 * @param {(el: HTMLElement) => void} construct
 * @param {string} observed
 * @param {Object} obj
 */
function createDartWebComponent(tag, construct, observed, obj) {
  const observedList = Array.from(observed.split(",")).filter((e) => !!e);
  customElements.define(
    tag,
    class extends HTMLElement {
      constructor() {
        super();
        construct(this);
      }

      connectedCallback() {
        obj.connectedCallback(this);
      }

      disconnectedCallback() {
        obj.disconnectedCallback(this);
      }

      adoptedCallback() {
        obj.adoptedCallback(this);
      }

      /**
       * @param {String} attr
       * @param {String} oldVal
       * @param {String} newVal
       */
      attributeChangedCallback(attr, oldVal, newVal) {
        obj.attributeChangedCallback(this, attr, oldVal, newVal);
      }

      static get observedAttributes() {
        return observedList;
      }
    }
  );
  return customElements.get(tag);
}

globalThis.createDartWebComponent = createDartWebComponent;
