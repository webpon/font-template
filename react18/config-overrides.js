const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

const { override, addWebpackAlias } = require('customize-cra');

module.exports = override(
    addWebpackAlias({
        "@": resolve("src"),
    })
);