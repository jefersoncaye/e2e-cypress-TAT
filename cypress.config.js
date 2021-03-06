const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      baseUrl: "https://notes-serverless-app.com",
      defaultCommandTimeout: 10000,
      requestTimeout: 10000,
      chromeWebSecurity: false,
      experimentalSessionAndOrigin: true,
      "env": {
        "viewportWidthBreakpoint": 768
      },
  },
});
