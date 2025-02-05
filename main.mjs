
// Compiles a dart2wasm-generated main module from `source` which can then
// instantiatable via the `instantiate` method.
//
// `source` needs to be a `Response` object (or promise thereof) e.g. created
// via the `fetch()` JS API.
export async function compileStreaming(source) {
  const builtins = {builtins: ['js-string']};
  return new CompiledApp(
      await WebAssembly.compileStreaming(source, builtins), builtins);
}

// Compiles a dart2wasm-generated wasm modules from `bytes` which is then
// instantiatable via the `instantiate` method.
export async function compile(bytes) {
  const builtins = {builtins: ['js-string']};
  return new CompiledApp(await WebAssembly.compile(bytes, builtins), builtins);
}

// DEPRECATED: Please use `compile` or `compileStreaming` to get a compiled app,
// use `instantiate` method to get an instantiated app and then call
// `invokeMain` to invoke the main function.
export async function instantiate(modulePromise, importObjectPromise) {
  var moduleOrCompiledApp = await modulePromise;
  if (!(moduleOrCompiledApp instanceof CompiledApp)) {
    moduleOrCompiledApp = new CompiledApp(moduleOrCompiledApp);
  }
  const instantiatedApp = await moduleOrCompiledApp.instantiate(await importObjectPromise);
  return instantiatedApp.instantiatedModule;
}

// DEPRECATED: Please use `compile` or `compileStreaming` to get a compiled app,
// use `instantiate` method to get an instantiated app and then call
// `invokeMain` to invoke the main function.
export const invoke = (moduleInstance, ...args) => {
  moduleInstance.exports.$invokeMain(args);
}

class CompiledApp {
  constructor(module, builtins) {
    this.module = module;
    this.builtins = builtins;
  }

  // The second argument is an options object containing:
  // `loadDeferredWasm` is a JS function that takes a module name matching a
  //   wasm file produced by the dart2wasm compiler and returns the bytes to
  //   load the module. These bytes can be in either a format supported by
  //   `WebAssembly.compile` or `WebAssembly.compileStreaming`.
  async instantiate(additionalImports, {loadDeferredWasm} = {}) {
    let dartInstance;

    // Prints to the console
    function printToConsole(value) {
      if (typeof dartPrint == "function") {
        dartPrint(value);
        return;
      }
      if (typeof console == "object" && typeof console.log != "undefined") {
        console.log(value);
        return;
      }
      if (typeof print == "function") {
        print(value);
        return;
      }

      throw "Unable to print message: " + js;
    }

    // Converts a Dart List to a JS array. Any Dart objects will be converted, but
    // this will be cheap for JSValues.
    function arrayFromDartList(constructor, list) {
      const exports = dartInstance.exports;
      const read = exports.$listRead;
      const length = exports.$listLength(list);
      const array = new constructor(length);
      for (let i = 0; i < length; i++) {
        array[i] = read(list, i);
      }
      return array;
    }

    // A special symbol attached to functions that wrap Dart functions.
    const jsWrappedDartFunctionSymbol = Symbol("JSWrappedDartFunction");

    function finalizeWrapper(dartFunction, wrapped) {
      wrapped.dartFunction = dartFunction;
      wrapped[jsWrappedDartFunctionSymbol] = true;
      return wrapped;
    }

    // Imports
    const dart2wasm = {

      _11: x0 => new Array(x0),
      _13: x0 => x0.length,
      _15: (x0,x1) => x0[x1],
      _16: (x0,x1,x2) => x0[x1] = x2,
      _19: (x0,x1,x2) => new DataView(x0,x1,x2),
      _21: x0 => new Int8Array(x0),
      _22: (x0,x1,x2) => new Uint8Array(x0,x1,x2),
      _23: x0 => new Uint8Array(x0),
      _33: x0 => new Uint32Array(x0),
      _42: (o,s,v) => o[s] = v,
      _43: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._43(f,arguments.length,x0) }),
      _44: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._44(f,arguments.length,x0) }),
      _69: () => Symbol("jsBoxedDartObjectProperty"),
      _70: (decoder, codeUnits) => decoder.decode(codeUnits),
      _71: () => new TextDecoder("utf-8", {fatal: true}),
      _72: () => new TextDecoder("utf-8", {fatal: false}),
      _73: x0 => new WeakRef(x0),
      _74: x0 => x0.deref(),
      _84: () => {
        let stackString = new Error().stack.toString();
        let frames = stackString.split('\n');
        let drop = 2;
        if (frames[0] === 'Error') {
            drop += 1;
        }
        return frames.slice(drop).join('\n');
      },
      _88: () => {
        // On browsers return `globalThis.location.href`
        if (globalThis.location != null) {
          return globalThis.location.href;
        }
        return null;
      },
      _89: () => {
        return typeof process != "undefined" &&
               Object.prototype.toString.call(process) == "[object process]" &&
               process.platform == "win32"
      },
      _93: () => globalThis.WeakRef,
      _104: s => JSON.stringify(s),
      _105: s => printToConsole(s),
      _106: a => a.join(''),
      _107: (o, a, b) => o.replace(a, b),
      _109: (s, t) => s.split(t),
      _110: s => s.toLowerCase(),
      _111: s => s.toUpperCase(),
      _112: s => s.trim(),
      _113: s => s.trimLeft(),
      _114: s => s.trimRight(),
      _116: (s, p, i) => s.indexOf(p, i),
      _117: (s, p, i) => s.lastIndexOf(p, i),
      _118: (s) => s.replace(/\$/g, "$$$$"),
      _119: Object.is,
      _120: s => s.toUpperCase(),
      _121: s => s.toLowerCase(),
      _122: (a, i) => a.push(i),
      _123: (a, i) => a.splice(i, 1)[0],
      _125: (a, l) => a.length = l,
      _131: (a, s, e) => a.splice(s, e),
      _132: (a, b) => a == b ? 0 : (a > b ? 1 : -1),
      _133: a => a.length,
      _135: (a, i) => a[i],
      _136: (a, i, v) => a[i] = v,
      _139: (o, start, length) => new Uint8Array(o.buffer, o.byteOffset + start, length),
      _140: (o, start, length) => new Int8Array(o.buffer, o.byteOffset + start, length),
      _141: (o, start, length) => new Uint8ClampedArray(o.buffer, o.byteOffset + start, length),
      _142: (o, start, length) => new Uint16Array(o.buffer, o.byteOffset + start, length),
      _143: (o, start, length) => new Int16Array(o.buffer, o.byteOffset + start, length),
      _144: (o, start, length) => new Uint32Array(o.buffer, o.byteOffset + start, length),
      _145: (o, start, length) => new Int32Array(o.buffer, o.byteOffset + start, length),
      _148: (o, start, length) => new Float32Array(o.buffer, o.byteOffset + start, length),
      _149: (o, start, length) => new Float64Array(o.buffer, o.byteOffset + start, length),
      _152: (o) => new DataView(o.buffer, o.byteOffset, o.byteLength),
      _154: o => o.buffer,
      _155: o => o.byteOffset,
      _156: Function.prototype.call.bind(Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength').get),
      _157: (b, o) => new DataView(b, o),
      _159: Function.prototype.call.bind(DataView.prototype.getUint8),
      _160: Function.prototype.call.bind(DataView.prototype.setUint8),
      _161: Function.prototype.call.bind(DataView.prototype.getInt8),
      _162: Function.prototype.call.bind(DataView.prototype.setInt8),
      _163: Function.prototype.call.bind(DataView.prototype.getUint16),
      _164: Function.prototype.call.bind(DataView.prototype.setUint16),
      _165: Function.prototype.call.bind(DataView.prototype.getInt16),
      _166: Function.prototype.call.bind(DataView.prototype.setInt16),
      _167: Function.prototype.call.bind(DataView.prototype.getUint32),
      _168: Function.prototype.call.bind(DataView.prototype.setUint32),
      _169: Function.prototype.call.bind(DataView.prototype.getInt32),
      _170: Function.prototype.call.bind(DataView.prototype.setInt32),
      _175: Function.prototype.call.bind(DataView.prototype.getFloat32),
      _176: Function.prototype.call.bind(DataView.prototype.setFloat32),
      _177: Function.prototype.call.bind(DataView.prototype.getFloat64),
      _178: Function.prototype.call.bind(DataView.prototype.setFloat64),
      _191: x0 => ({mode: x0}),
      _192: (x0,x1) => x0.attachShadow(x1),
      _193: () => new CSSStyleSheet(),
      _194: (x0,x1) => x0.replaceSync(x1),
      _195: (x0,x1) => x0.createElement(x1),
      _196: (x0,x1) => x0.appendChild(x1),
      _197: (x0,x1) => x0.appendChild(x1),
      _198: (x0,x1) => x0.appendChild(x1),
      _199: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._199(f,arguments.length,x0) }),
      _200: (x0,x1,x2) => x0.addEventListener(x1,x2),
      _201: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._201(f,arguments.length,x0) }),
      _202: (x0,x1,x2) => x0.setAttribute(x1,x2),
      _203: (x0,x1) => x0.getAttribute(x1),
      _204: (x0,x1) => x0.attachShadow(x1),
      _205: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._205(f,arguments.length,x0) }),
      _206: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._206(f,arguments.length,x0) }),
      _207: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._207(f,arguments.length,x0) }),
      _208: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._208(f,arguments.length,x0) }),
      _209: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._209(f,arguments.length,x0) }),
      _210: f => finalizeWrapper(f, function(x0,x1,x2,x3) { return dartInstance.exports._210(f,arguments.length,x0,x1,x2,x3) }),
      _211: (x0,x1,x2,x3) => globalThis.createDartWebComponent(x0,x1,x2,x3),
      _228: (c) =>
      queueMicrotask(() => dartInstance.exports.$invokeCallback(c)),
      _230: (x0,x1,x2,x3,x4,x5) => ({method: x0,headers: x1,body: x2,credentials: x3,redirect: x4,signal: x5}),
      _231: (x0,x1,x2) => x0.fetch(x1,x2),
      _232: (x0,x1) => x0.get(x1),
      _233: f => finalizeWrapper(f, function(x0,x1,x2) { return dartInstance.exports._233(f,arguments.length,x0,x1,x2) }),
      _234: (x0,x1) => x0.forEach(x1),
      _236: () => new AbortController(),
      _237: x0 => x0.getReader(),
      _238: x0 => x0.read(),
      _239: x0 => x0.cancel(),
      _273: (s, m) => {
        try {
          return new RegExp(s, m);
        } catch (e) {
          return String(e);
        }
      },
      _274: (x0,x1) => x0.exec(x1),
      _275: (x0,x1) => x0.test(x1),
      _276: (x0,x1) => x0.exec(x1),
      _277: (x0,x1) => x0.exec(x1),
      _278: x0 => x0.pop(),
      _280: o => o === undefined,
      _299: o => typeof o === 'function' && o[jsWrappedDartFunctionSymbol] === true,
      _302: o => o instanceof RegExp,
      _303: (l, r) => l === r,
      _304: o => o,
      _305: o => o,
      _306: o => o,
      _307: b => !!b,
      _308: o => o.length,
      _311: (o, i) => o[i],
      _312: f => f.dartFunction,
      _313: l => arrayFromDartList(Int8Array, l),
      _314: l => arrayFromDartList(Uint8Array, l),
      _315: l => arrayFromDartList(Uint8ClampedArray, l),
      _316: l => arrayFromDartList(Int16Array, l),
      _317: l => arrayFromDartList(Uint16Array, l),
      _318: l => arrayFromDartList(Int32Array, l),
      _319: l => arrayFromDartList(Uint32Array, l),
      _320: l => arrayFromDartList(Float32Array, l),
      _321: l => arrayFromDartList(Float64Array, l),
      _322: x0 => new ArrayBuffer(x0),
      _323: (data, length) => {
        const getValue = dartInstance.exports.$byteDataGetUint8;
        const view = new DataView(new ArrayBuffer(length));
        for (let i = 0; i < length; i++) {
          view.setUint8(i, getValue(data, i));
        }
        return view;
      },
      _324: l => arrayFromDartList(Array, l),
      _325: () => ({}),
      _326: () => [],
      _327: l => new Array(l),
      _330: (o, p) => p in o,
      _331: (o, p) => o[p],
      _332: (o, p, v) => o[p] = v,
      _333: (o, m, a) => o[m].apply(o, a),
      _335: o => String(o),
      _336: (p, s, f) => p.then(s, f),
      _337: o => {
        if (o === undefined) return 1;
        var type = typeof o;
        if (type === 'boolean') return 2;
        if (type === 'number') return 3;
        if (type === 'string') return 4;
        if (o instanceof Array) return 5;
        if (ArrayBuffer.isView(o)) {
          if (o instanceof Int8Array) return 6;
          if (o instanceof Uint8Array) return 7;
          if (o instanceof Uint8ClampedArray) return 8;
          if (o instanceof Int16Array) return 9;
          if (o instanceof Uint16Array) return 10;
          if (o instanceof Int32Array) return 11;
          if (o instanceof Uint32Array) return 12;
          if (o instanceof Float32Array) return 13;
          if (o instanceof Float64Array) return 14;
          if (o instanceof DataView) return 15;
        }
        if (o instanceof ArrayBuffer) return 16;
        return 17;
      },
      _338: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI8ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _339: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI8ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _342: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _350: x0 => x0.input,
      _351: x0 => x0.index,
      _352: x0 => x0.groups,
      _356: x0 => x0.flags,
      _357: x0 => x0.multiline,
      _358: x0 => x0.ignoreCase,
      _359: x0 => x0.unicode,
      _360: x0 => x0.dotAll,
      _361: (x0,x1) => x0.lastIndex = x1,
      _363: (o, p) => o[p],
      _364: (o, p, v) => o[p] = v,
      _366: x0 => x0.random(),
      _367: x0 => x0.random(),
      _371: () => globalThis.Math,
      _373: Function.prototype.call.bind(Number.prototype.toString),
      _506: (x0,x1) => x0.innerText = x1,
      _1660: x0 => x0.value,
      _1661: (x0,x1) => x0.value = x1,
      _2248: () => globalThis.window,
      _4951: x0 => x0.signal,
      _5030: () => globalThis.document,
      _5403: (x0,x1) => x0.innerHTML = x1,
      _5406: (x0,x1) => x0.adoptedStyleSheets = x1,
      _5481: x0 => x0.shadowRoot,
      _5498: (x0,x1) => x0.innerHTML = x1,
      _6855: x0 => x0.value,
      _6857: x0 => x0.done,
      _7580: x0 => x0.url,
      _7582: x0 => x0.status,
      _7584: x0 => x0.statusText,
      _7585: x0 => x0.headers,
      _7586: x0 => x0.body,

    };

    const baseImports = {
      dart2wasm: dart2wasm,


      Math: Math,
      Date: Date,
      Object: Object,
      Array: Array,
      Reflect: Reflect,
    };

    const jsStringPolyfill = {
      "charCodeAt": (s, i) => s.charCodeAt(i),
      "compare": (s1, s2) => {
        if (s1 < s2) return -1;
        if (s1 > s2) return 1;
        return 0;
      },
      "concat": (s1, s2) => s1 + s2,
      "equals": (s1, s2) => s1 === s2,
      "fromCharCode": (i) => String.fromCharCode(i),
      "length": (s) => s.length,
      "substring": (s, a, b) => s.substring(a, b),
      "fromCharCodeArray": (a, start, end) => {
        if (end <= start) return '';

        const read = dartInstance.exports.$wasmI16ArrayGet;
        let result = '';
        let index = start;
        const chunkLength = Math.min(end - index, 500);
        let array = new Array(chunkLength);
        while (index < end) {
          const newChunkLength = Math.min(end - index, 500);
          for (let i = 0; i < newChunkLength; i++) {
            array[i] = read(a, index++);
          }
          if (newChunkLength < chunkLength) {
            array = array.slice(0, newChunkLength);
          }
          result += String.fromCharCode(...array);
        }
        return result;
      },
    };

    const deferredLibraryHelper = {
      "loadModule": async (moduleName) => {
        if (!loadDeferredWasm) {
          throw "No implementation of loadDeferredWasm provided.";
        }
        const source = await Promise.resolve(loadDeferredWasm(moduleName));
        const module = await ((source instanceof Response)
            ? WebAssembly.compileStreaming(source, this.builtins)
            : WebAssembly.compile(source, this.builtins));
        return await WebAssembly.instantiate(module, {
          ...baseImports,
          ...additionalImports,
          "wasm:js-string": jsStringPolyfill,
          "module0": dartInstance.exports,
        });
      },
    };

    dartInstance = await WebAssembly.instantiate(this.module, {
      ...baseImports,
      ...additionalImports,
      "deferredLibraryHelper": deferredLibraryHelper,
      "wasm:js-string": jsStringPolyfill,
    });

    return new InstantiatedApp(this, dartInstance);
  }
}

class InstantiatedApp {
  constructor(compiledApp, instantiatedModule) {
    this.compiledApp = compiledApp;
    this.instantiatedModule = instantiatedModule;
  }

  // Call the main function with the given arguments.
  invokeMain(...args) {
    this.instantiatedModule.exports.$invokeMain(args);
  }
}

