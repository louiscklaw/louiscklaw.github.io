const _ = require('lodash');

const zhHK = require('./zh-HK');
const enUS = require('./en-US');

// ​bloat object by lang

Object.keys(zhHK).forEach(k => {
  zhHK[k] = { 'zh-HK': zhHK[k] };
});
Object.keys(enUS).forEach(k => {
  enUS[k] = { 'en-US': enUS[k] };
});

module.exports = _.merge(zhHK, enUS);
