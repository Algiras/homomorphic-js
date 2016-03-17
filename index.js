'use strict';

var types = require('./types');
var _ = require('lodash');

var map = function(f, a){
  return types.arr(a).map(types.func(f));
};

var arrayOf = function(f){
  return function(a){
    return map(types.func(f), types.arr(a));
  };
};

var checkTypes = function(typeSafeties){
  arrayOf(types.func)(types.arr(typeSafeties));
  var argLength = typeSafeties.length;
  return function(args){
    types.arr(args);
    if (args.length !== argLength){
      throw new TypeError('Expected ' + argLength + ' arguments');
    }
    var results = [];
    for (var i = 0; i < argLength; i++){
      results[i] = typeSafeties[i](args[i]);
    }
    return results;
  };
};

module.exports = {
  homoMorph: function(){
    var before = checkTypes(arrayOf(types.func)(Array.prototype.slice.call(arguments, 0, arguments.length - 1)));
    var after = types.func(arguments[arguments.length - 1]);
    return function(middle){
      return function(args){
        return after(middle.apply(this, before([].slice.apply(arguments))));
      };
    };
  },
  types: _.extend({arrayOf : arrayOf}, types)
};
