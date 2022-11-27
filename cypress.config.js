const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "reporter": "cypress-sonarqube-reporter",
    "reporterOptions": {
        "overwrite": true
    },
    "env": {
      BASE_URL: 'http://localhost:19006'
    }
  }
});
