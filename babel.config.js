module.exports = {
  presets: ['module:@react-native/babel-preset'],

  plugins: [
    // other plugins
    ['react-native-unistyles/plugin', {
      debug: true
    }],
    'babel-plugin-react-compiler'
  ]
};
