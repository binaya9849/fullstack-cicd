module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true
  },
  overrides: [
    {
      files: ["jest.setup.js"],
      env: {
        node: true,
        jest: true
      },
      rules: {
        "no-undef": "off"
      }
    }
  ]
}