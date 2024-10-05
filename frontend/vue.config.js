const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  publicPath: "/load-monitoring/",
  devServer: {
    port: 8080,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },

  pluginOptions: {
    vuetify: {},
  },
});
