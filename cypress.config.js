const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('./cypress/plugins/index.js')(on, config)
      return config
    },
    reporterOptions: {
      overwrite: true,
      preserveSpecsDir: false,
      outputDir: 'coverage/xml-reports/',
    },
    env: {
      BASE_URL: 'http://localhost:19006',
    },
  },
})
