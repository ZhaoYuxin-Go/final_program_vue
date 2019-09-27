module.exports = {
  presets: [
    '@vue/app'
  ],
  // mint-ui按需加载
  "plugins": [["component", 
  {
    "libraryName": "mint-ui",
    "style": true
  }
]]
}
