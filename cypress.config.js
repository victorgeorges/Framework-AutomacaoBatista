const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  chromeWebSecurity: false,
  env: {
    url: 'https://automacaocombatista.herokuapp.com/treinamento/home',
  },
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress/results/test-results-[hash].xml',
    toConsole: true,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
