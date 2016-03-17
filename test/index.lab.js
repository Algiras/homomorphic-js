'use strict';
var Lab = require('lab');
var Code = require('code');

var index = require('../');
var types = require('../types');

var lab = exports.lab = Lab.script();

lab.suite('index', function(){
  lab.suite('homoMorph', function(){

    lab.test('should provide a type-check wrapper for function', function(done){
      Code.expect(index.homoMorph(types.num, types.num, types.num)).to.be.function();
      done();
    });

    lab.test('should apply check on input of the wrapped function and throw error on mismatch', function(done){
      var sum = function(a, b){ return a + b;};
      Code.expect(index.homoMorph(types.num, types.num, types.num)(sum).bind(null, 1, '2')).to.throw(TypeError);
      done();
    });

    lab.test('should apply check on output of the wrapped function and throw error on mismatch', function(done){
      var sum = function(a, b){ return (a + b).toString();};
      Code.expect(index.homoMorph(types.num, types.num, types.num)(sum).bind(null, 1, 2)).to.throw(TypeError);
      done();
    });

    lab.test('should have expected nr of parameters or else throw TypeError', function(done){
      var sum = function(a, b){ return a + b;};
      Code.expect(index.homoMorph(types.num, types.num, types.num)(sum).bind(null, 2)).to.throw(TypeError, 'Expected 2 arguments');
      done();
    });
  });

  lab.suite('arrayOf', function(){
    lab.test('should check if list has same type of elements else throw a TypeError', function(done){
      Code.expect(index.types.arrayOf(index.types.num).bind(null, [1, 2, 'a'])).to.throw(TypeError);
      done();
    });

    lab.test('should return same value if array is of the same type', function(done){
      var arrOfNumbers = [1, 2, 3];
      Code.expect(index.types.arrayOf(index.types.num)([1, 2, 3])).to.deep.equal(arrOfNumbers);
      done();
    });
  });
});
