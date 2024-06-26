import { defineConfig } from "cypress";

export default defineConfig({
  trashAssetsBeforeRuns: true,
  screenshotOnRunFailure:true,
  e2e: {
    baseUrl: 'http://localhost:5173/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        seedDatabase() {
          //run your nodejs
          //e.g., edit a file here
          return filename
        }
      })
    },
  },
});
