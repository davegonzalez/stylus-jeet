Package.describe({
  summary: 'Expressive, dynamic, robust CSS'
});

Package._transitional_registerBuildPlugin({
  name: "compileStylus",
  use: [],
  sources: [
    'plugin/compile-stylus.js'
  ],
  npmDependencies: {
    stylus: "0.41.3",
    nib: "1.0.1",
    jeet: "4.1.1"
  }
});

Package.on_test(function(api) {
  // api.use(['tinytest', 'stylus-latest', 'test-helpers']);
  // api.use('spark');
  // api.add_files(['stylus_tests.styl', 'stylus_tests.js'], 'client');
});