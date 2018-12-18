'use strict';
module.exports = exports ={};
exports.greeting = (name) => {
  if (typeof(name) === 'string') {
    name = 'hello ' + name;
  } else {
    name = null;
  }
  return name;
};

