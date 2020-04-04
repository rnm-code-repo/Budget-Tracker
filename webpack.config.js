const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  entry: {
    app: "./public/index.js"
  },
  output: {
    path: __dirname + "/public/dist",
    filename: "[name].bundle.js"
  },
  mode: "production",
  
  plugins: [
    new WebpackPwaManifest({
      name: "Budget Tracker",
      short_name: "Budget Tracker",
      description: "Budget tracker App",
      background_color: "#01579b",
      theme_color: "#ffffff",
      start_url: "/",
      display: "standalone",
      icons: [{
        src: path.resolve(__dirname, "public/icons/icon-192x192.png"),
        size: [192,512],
      }]
    })
  ],
 /* module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }*/
};

module.exports = config;