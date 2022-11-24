/**
 * @type {Cypress.PluginConfig}
 */
 module.exports = (on, config) => {
    // https://docs.cypress.io/api/plugins/after-run-api
    on('after:run', (results) => {
		// /!\ don't forget to return the Promise /!\
        return require('cypress-sonarqube-reporter/mergeReports')(results);
    });

    require('@cypress/code-coverage/task')(on, config);

    return config;
};