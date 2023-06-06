const localeDomains = require('~~/config/locale-domains');

console.log("This is the domains", localeDomains)

export const state = () => ({
  localeDomains,
});
