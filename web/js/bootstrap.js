
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

      /**
       * @param {String} attr
       * @param {String} oldVal
       * @param {String} newVal
       */
      attributeChangedCallback(attr, oldVal, newVal) {
        obj.attributeChangedCallback(attr, oldVal, newVal);
      }

      static get observedAttributes() {
        return observedList;
      }
    },
  );
  return customElements.get(tag);
}

globalThis.createDartWebComponent = createDartWebComponent;

(async function () {
  let dart2wasm_runtime;
  let moduleInstance;
  let moduleName = "main";
  let dir = "../wasm/";
  try {
    const dartModulePromise = WebAssembly.compileStreaming(
      fetch(`${dir}${moduleName}.dart.wasm`),
    );
    const imports = {};
    dart2wasm_runtime = await import(`${dir}${moduleName}.dart.mjs`);
    moduleInstance = await dart2wasm_runtime.instantiate(
      dartModulePromise,
      imports,
    );
  } catch (exception) {
    console.error(`Failed to fetch and instantiate wasm module: ${exception}`);
    console.error("See https://dart.dev/web/wasm for more information.");
  }

  if (moduleInstance) {
    try {
      await dart2wasm_runtime.invoke(moduleInstance);
    } catch (exception) {
      console.error(`Exception while invoking test: ${exception}`);
    }
  }
})();
