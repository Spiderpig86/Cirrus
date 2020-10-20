const withReactSvg = require('next-react-svg');
const withImages = require('next-images');
const path = require('path');

module.exports = withReactSvg({
    include: path.resolve(__dirname, 'static/svg'),
    webpack(config, options) {
        return config;
    },
});

module.exports = withImages();

module.exports = {
    webpack: function (config) {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        });
        return config;
    },
};
