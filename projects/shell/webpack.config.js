const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@corpay/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "shell"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({

      // For remotes (please adjust)
      // name: "shell",
      // filename: "remoteEntry.js",
      // exposes: {
      //     './Component': './projects/shell/src/app/app.component.ts',
      // },

      // For hosts (please adjust)
      // remoteType: "var",
      remotes: {
        // "mfe1": "mfe1@http://localhost:3000/remoteEntry.js"
        // "mfe1": "mfe1"
      },

      shared: {
        "@angular/core": {singleton: true, strictVersion: true},
        "@angular/router": {singleton: true, strictVersion: true},
        "@ngx-translate/core": {singleton: true, strictVersion: true},
        "@ngx-translate/http-loader": {singleton: true, strictVersion: true},
        "ngx-bootstrap/modal": {singleton: true, strictVersion: true},

        // Uncomment for sharing lib of an Angular CLI or Nx workspace
        ...sharedMappings.getDescriptors()
      }

    }),

    // Uncomment for sharing lib of an Angular CLI or Nx workspace
    sharedMappings.getPlugin(),
  ],
};
