module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@components': './src/components',
          '@pages': './src/pages',
          '@services': './src/services',
          '@styles': './src/styles',
          '@config': './src/config',
          '@routes': './src/routes',
          "@atoms": './src/components/atoms',
          "@molecules": './src/components/molecules',
          "@organisms": './src/components/organisms',
          "@templates": './src/components/templates',
          "@pages": './src/components/pages',
          "@typography": './src/components/typography',
          "@contexts": './src/contexts',
          "@assets": './src/assets',
        },
      },
    ],
  ],
};
