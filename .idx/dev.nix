# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-23.11"; # or "unstable"
  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.nodejs_20
  ];
  # Sets environment variables in the workspace
  env = {};
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      "Dart-Code.dart-code"
    ];
    # Enable previews and customize configuration
    previews = {
      enable = true;
      previews = {
        web = {
          command = ["dhttpd" "--path" "web" "--port" "$PORT" "--host" "0.0.0.0"];
          manager = "web";
        };
      };
    };
    # Workspace lifecycle hooks
    workspace = {
      # Runs when a workspace is first created
      onCreate = {
        dhttpd-install = "dart pub global activate dhttpd";
        default.openFiles = [ "web/style.css" "lib/main.dart" "web/index.html" ];
      };
      # Runs when the workspace is (re)started
      onStart = {
        get-deps = "dart pub get";
        app-build = "dart compile wasm -o web/wasm/main.dart.wasm lib/main.dart";
      };
    };
  };
}