const lodash = require('lodash');
const Items =[1,[2,[3,[4]]]];
const newItems =lodash.flattenDeep(Items);
console.log(newItems);