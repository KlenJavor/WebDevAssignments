const lodash=require('lodash');

const stringBeforeLodash = 'Foo Bar';

// to camelCase with lodash
const stringAfterLodash = lodash.camelCase(stringBeforeLodash);
console.log(stringAfterLodash)