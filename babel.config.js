var isDev = process.env.NODE_ENV === 'production' ? false : true;

module.exports = {
  "presets": [
    "babel-preset-gatsby"
  ],
  "plugins": [
    [
      "babel-plugin-styled-components",
      {
        "displayName": isDev ? true : false
      }
    ],
  ],
}