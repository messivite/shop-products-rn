module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",

      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@Components': './src/components',
          '@Combine': './src/components/combine',
          '@UI': './src/components/ui',
          '@Assets': './src/assets',
          '@Views': './src/components/views',
          '@Interfaces': './src/interfaces',
          '@Services': './src/services',
          '@Core': './src/core',
          '@Constants': './src/constants',
          '@Models': './src/models',
          '@Types': './src/@types',
          '@Store': './src/redux/store',
          '@Redux': './src/redux',
          '@Reducers': './src/redux/reducers',
          '@Hooks': './src/hooks',
          '@Screens': './src/screens'
        },
      }

    ],
    "react-native-reanimated/plugin",
  ],
};
