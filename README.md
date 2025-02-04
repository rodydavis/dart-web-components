# Dart Web Components

Simple example with using Dart to create web components and compiling Dart to WASM and JS.

## Build

```bash
dart compile wasm -o web/wasm/main.dart.wasm lib/main.dart
```

## Serve

```bash
dhttpd --path web
```

Open http://localhost:8080
