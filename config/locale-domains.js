module.exports = [
    { code: 'en-gb', name: 'UK', domain: process.env.DOMAIN_UK },
    { code: 'en-sg', name: 'SG', domain: process.env.DOMAIN_SG },
    { code: 'en-ie', name: 'IE', domain: process.env.DOMAIN_IE },
    { code: 'en-au', name: 'AU', domain: process.env.DOMAIN_AU },
    { code: 'en-us', name: 'US', domain: process.env.DOMAIN_US },
    { code: 'pl', name: 'PL', domain: process.env.DOMAIN_PL }
  ];
  
  function getDomainByLocale(locale) {
    const localeObj = module.exports.find(obj => obj.code === locale);
    return localeObj ? localeObj.domain : null;
  }
  
  module.exports.getDomainByLocale = getDomainByLocale;