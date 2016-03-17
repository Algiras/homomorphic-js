'use strict';

module.exports = {
  typeOf : function(type){
    return function(entry) {
      var result;
      if (typeof entry === type){
        result = entry;
      } else {
        throw new TypeError(type + ' expected, ' + typeof entry + ' given');
      }
      return result;
    };
  },
  objectTypeOf : function(name){
    return function(obj){
      var result;
      if (Object.prototype.toString.call(obj) === '[object ' + name + ']'){
        result = obj;
      } else {
        throw new TypeError(name + ' expected, something else given');
      }
      return result;
    };
  }
};
