const sveltePreprocess = require("svelte-preprocess");

// Export a function. Accept the base config as the only param.
module.exports = {
  stories: ["../stories/**/*.stories.js"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links"],
  webpackFinal: async (config) => {
    config.module.rules.forEach((rule) => {
      if (rule.test.test(".svelte")) {
        rule.options = {
          preprocess: sveltePreprocess(),
        };
      }
    });
    
    return config;
  },
};
