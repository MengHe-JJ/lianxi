const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');
const path = require("path")

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
    // 默认路径设置
    addWebpackAlias({
        "@":path.resolve(__dirname,"./src"),
        "@assets":path.resolve(__dirname,"./src/assets"),
        "@components":path.resolve(__dirname,"./src/components"),
        "@mock":path.resolve(__dirname,"./src/mock")
    })

     
);