'use strict';
var Lab = require('lab');
var Code = require('code');

var util = require('../util');

var lab = exports.lab = Lab.script();

lab.suite('util', function(){

  lab.suite('typeOf', function(){

    lab.test('should return function', function(done){
      Code.expect(util.typeOf('string')).to.be.function();
      done();
    });

    lab.test('should return value if it matches type', function(done){
      Code.expect(util.typeOf('string')('a')).to.be.equal('a');
      done();
    });

    lab.test('should throw typeError on bad type', function(done){
      Code.expect(util.typeOf('string').bind(null, 1)).to.throw(TypeError, 'string expected, number given');
      done();
    });
  });

  lab.suite('objectTypeOf', function(){
    lab.test('should return function', function(done){
      Code.expect(util.objectTypeOf('Something')).to.be.function();
      done();
    });

    lab.test('should return value if it matches type', function(done){
      Code.expect(util.objectTypeOf('RegExp')(/a/)).to.be.deep.equal(/a/);
      done();
    });

    lab.test('should throw typeError on bad type', function(done){
      Code.expect(util.objectTypeOf('RegExp').bind(null, 1)).to.throw(TypeError, 'RegExp expected, something else given');
      done();
    });
  });
});
