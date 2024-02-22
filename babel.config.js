process.env.TAMAGUI_TARGET = 'native'; // Don't forget to specify your TAMAGUI_TARGET here
require('dotenv').config();

module.exports = (api) => {
  // api.cache(true);


  console.debug('babel.config.js');
  console.debug('  - api.version:', api.version);
  console.debug('  - api.env:', api.env());
  console.debug('  - process.env.NODE_ENV:', process.env.NODE_ENV);
  console.debug('  - process.env.BABEL_ENV:', process.env.BABEL_ENV);

  const runningIn = api.caller((args = {}) => args.name);
  console.debug('  - running in: ', runningIn);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Required for expo-router
      'expo-router/babel',
      "transform-inline-environment-variables",
      // This is needed due to a react-native bug: https://github.com/facebook/react-native/issues/29084#issuecomment-1030732709
      // It is included in metro-react-native-babel-preset but needs to be before plugin-proposal-class-properties or FlatList will break
      '@babel/plugin-transform-flow-strip-types',
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      ['@babel/plugin-transform-private-methods', { loose: true }],
      ['@babel/plugin-transform-private-property-in-object', { loose: true }],

      // Import alias for native devices
      [
        'module-resolver',
        {
          extensions: [
            '.native.js',
            '.native.jsx',
            '.native.ts',
            '.native.tsx',
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.ios.js',
            '.ios.jsx',
            '.ios.ts',
            '.ios.tsx',
            '.android.js',
            '.android.jsx',
            '.android.ts',
            '.android.tx',
          ],
          alias: {
            '@assets': './assets',
            '@constants': './constants',
            '@components': './components',
            '@configuration': './configuration',
            '@hooks': './hooks',
            '@libs': './libs',
            '@navigation': './libs/Navigation',
            '@pages': './pages',
            '@styles': './styles',
            '@utils': './utils',
            // This path is provide alias for files like `ONYXKEYS` and `CONST`.
            '@': './',
            '@userActions': './libs/actions',
          },
        },
      ],
      [
        "@tamagui/babel-plugin",
        {
          components: ["tamagui"],
          config: "./configuration/tamaguiConfig.ts",
          logTimings: true,
        },
      ],
      // The reanimated babel plugin needs to be last, as stated here: https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation
      'react-native-reanimated/plugin',

    ],


    env: {
      production: {
        plugins: [['transform-remove-console', { exclude: ['error', 'warn'] }]],
      },
    },
  };
};


