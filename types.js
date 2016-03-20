'use strict';

var util = require('./util');

module.exports = {
  str: util.typeOf('string'),
  num: util.typeOf('number'),
  func: util.typeOf('function'),
  bool: util.typeOf('boolean'),
  undef: util.typeOf('undefined'),
  obj: util.objectTypeOf('Object'),
  arr: util.objectTypeOf('Array'),
  date: util.objectTypeOf('Date')
};
