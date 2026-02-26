const reactStrictPreset = require('react-strict-dom/babel-preset');

function getPlatform(caller) {
    // This information is populated by Expo
    return caller && caller.platform;
}

function getIsDev(caller) {
    // This information is populated by Expo
    if (caller?.isDev != null) return caller.isDev;
    return (
        process.env.BABEL_ENV === 'development' ||
        process.env.NODE_ENV === 'development'
    );
}

module.exports = function (api) {
    const platform = api.caller(getPlatform);
    const dev = api.caller(getIsDev);

    return {
        presets: [
            'babel-preset-expo',
            [
                reactStrictPreset,
                {
                    debug: dev,
                    dev,
                    platform
                }
            ]
        ],
        plugins: [
            'react-native-reanimated/plugin'
        ]
    };
};
