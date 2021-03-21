const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@corpay/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "mfe1"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({

      // For remotes (please adjust)
      name: "mfe1",
      filename: "remoteEntry.js",
      exposes: {
        './Module': './projects/mfe1/src/app/flights/flights.module.ts',
        './Download': './projects/mfe1/src/app/components/download.component.ts',
        './Upload': './projects/mfe1/src/app/components/upload.component.ts'
      },

      // For hosts (please adjust)
      // remotes: {
      //   "shell": "shell@http://localhost:5000/remoteEntry.js",
      // },

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
