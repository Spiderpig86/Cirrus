const path = require('path');
const withWorkbox = require("next-with-workbox");

module.exports = withWorkbox({
    webpack: function (config) {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        });
        config.module.rules.push({
          test: path.resolve(__dirname, 'static/svg'),
          use: ['@svgr/webpack'],
        });
    
        return config;
    },
    workbox: {
        // Options...
    },
});
