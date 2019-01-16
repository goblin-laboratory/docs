---
menu: Tools
---

### 1. create-react-app
- 项目地址: https://github.com/facebook/create-react-app


### 2. 使用 react-app-rewired 配置


### 3. 支持多页面


### 4. 同时按需加载 ant-design 和 ant-design-pro

```js
    config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }, 'ant'], config);
    config = injectBabelPlugin(
      [
        'import',
        {
          libraryName: 'ant-design-pro',
          libraryDirectory: 'lib',
          style: true,
          camel2DashComponentName: false,
        },
        'ant-design-pro',
      ],
      config,
    );
```

```js
// config-overrides.js
/* eslint-disable */
const paths = require('react-scripts/config/paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { injectBabelPlugin } = require('react-app-rewired');
// const rewireCssModules = require('react-app-rewire-css-modules');
// const rewireLess = require('react-app-rewire-less');
const rewireLess = require('react-app-rewire-less-modules');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

paths.appIndexJs = paths.appSrc + '/pages/login.js';
paths.appLoginJs = paths.appSrc + '/pages/login.js';
paths.appAdminJs = paths.appSrc + '/pages/admin.js';
paths.appAuthJs = paths.appSrc + '/pages/auth.js';
paths.servedPath = './';

const replacePlugin = (plugins, nameMatcher, newPlugin) => {
  const pluginIndex = plugins.findIndex(plugin => {
    return plugin.constructor && plugin.constructor.name && nameMatcher(plugin.constructor.name);
  });

  if (-1 === pluginIndex) {
    return plugins;
  }

  const nextPlugins = plugins
    .slice(0, pluginIndex)
    .concat(newPlugin)
    .concat(plugins.slice(pluginIndex + 1));

  return nextPlugins;
};

module.exports = {
  webpack: (config, env) => {
    config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }, 'ant'], config);
    config = injectBabelPlugin(
      [
        'import',
        {
          libraryName: 'ant-design-pro',
          libraryDirectory: 'lib',
          style: true,
          camel2DashComponentName: false,
        },
        'ant-design-pro',
      ],
      config,
    );
    config = rewireLess.withLoaderOptions({
      javascriptEnabled: true,
      // modifyVars: { "@primary-color": "#1DA57A" },
    })(config, env);

    if ('development' === env) {
      config.entry = {
        index: [require.resolve('react-dev-utils/webpackHotDevClient'), paths.appIndexJs],
        login: [require.resolve('react-dev-utils/webpackHotDevClient'), paths.appLoginJs],
        admin: [require.resolve('react-dev-utils/webpackHotDevClient'), paths.appAdminJs],
        auth: [require.resolve('react-dev-utils/webpackHotDevClient'), paths.appAuthJs],
      };
      config.output.filename = 'static/js/[name].bundle.js';

      const indexHtmlPlugin = new HtmlWebpackPlugin({
        inject: true,
        template: paths.appHtml,
        chunks: ['vendors', 'runtime~index', 'index'],
        filename: 'index.html',
      });
      const loginHtmlPlugin = new HtmlWebpackPlugin({
        inject: true,
        template: paths.appHtml,
        chunks: ['vendors', 'runtime~login', 'login'],
        filename: 'login.html',
      });
      const adminHtmlPlugin = new HtmlWebpackPlugin({
        inject: true,
        template: paths.appHtml,
        chunks: ['vendors', 'runtime~admin', 'admin'],
        filename: 'admin.html',
      });
      const authHtmlPlugin = new HtmlWebpackPlugin({
        inject: true,
        template: paths.appHtml,
        chunks: ['vendors', 'runtime~auth', 'auth'],
        filename: 'auth.html',
      });
      config.plugins = replacePlugin(config.plugins, name => /HtmlWebpackPlugin/i.test(name), indexHtmlPlugin);
      config.plugins.push(loginHtmlPlugin);
      config.plugins.push(adminHtmlPlugin);
      config.plugins.push(authHtmlPlugin);
    } else {
      config.entry = {
        index: [paths.appIndexJs],
        login: [paths.appLoginJs],
        admin: [paths.appAdminJs],
        auth: [paths.appAuthJs],
      };
      const indexHtmlPlugin = new HtmlWebpackPlugin({
        inject: true,
        template: paths.appHtml,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: {
            comments: '@cc_on',
          },
          minifyCSS: true,
          minifyURLs: true,
        },
        chunks: ['vendors', 'runtime~index', 'index'],
        filename: 'index.html',
      });
      const loginHtmlPlugin = new HtmlWebpackPlugin({
        inject: true,
        template: paths.appHtml,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: {
            comments: '@cc_on',
          },
          minifyCSS: true,
          minifyURLs: true,
        },
        chunks: ['vendors', 'runtime~login', 'login'],
        filename: 'login.html',
      });
      const adminHtmlPlugin = new HtmlWebpackPlugin({
        inject: true,
        template: paths.appHtml,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: {
            comments: '@cc_on',
          },
          minifyCSS: true,
          minifyURLs: true,
        },
        chunks: ['vendors', 'runtime~admin', 'admin'],
        filename: 'admin.html',
      });
      const authHtmlPlugin = new HtmlWebpackPlugin({
        inject: true,
        template: paths.appHtml,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: {
            comments: '@cc_on',
          },
          minifyCSS: true,
          minifyURLs: true,
        },
        chunks: ['vendors', 'runtime~auth', 'auth'],
        filename: 'auth.html',
      });
      config.plugins = replacePlugin(config.plugins, name => /HtmlWebpackPlugin/i.test(name), indexHtmlPlugin);
      config.plugins.push(loginHtmlPlugin);
      config.plugins.push(adminHtmlPlugin);
      config.plugins.push(authHtmlPlugin);

      // 统计分析;
      // if ('development' !== env) {
      //   config.plugins.push(new BundleAnalyzerPlugin({ generateStatsFile: true }));
      // }
    }
    return config;
  },
  devServer: configFunction => {
    return (proxy, allowedHost) => {
      const config = configFunction(proxy, allowedHost);
      config.historyApiFallback.rewrites = [
        { from: /^\/login\.html/, to: '/build/login.html' },
        { from: /^\/admin\.html/, to: '/build/admin.html' },
        { from: /^\/auth\.html/, to: '/build/auth.html' },
      ];
      return config;
    };
  },
};

```
