const path = require(`path`);
const sassResourcesLoader = require("craco-sass-resources-loader");
const sassInject = require.resolve("./src/styles/_mixins.scss");

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  plugins: [
    {
      plugin: sassResourcesLoader,
      options: {
        resources: sassInject,
      },
    },
  ],
  webpack: {
    alias: {
      "@pages": resolvePath("src/pages"),
      "@components": resolvePath("src/components"),
      "@contexts": resolvePath("src/contexts"),
      "@hooks": resolvePath("src/hooks"),
      "@typings": resolvePath("src/typings"),
      "@utils": resolvePath("src/utils"),
    },
  },
  typescript: {
    enableTypeChecking: true,
  },
};
