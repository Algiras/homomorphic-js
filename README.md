# Easy way to do Homomorphic Javascript

[![Build Status](https://travis-ci.org/Algiras/homomorphic-js.svg?branch=master)](https://travis-ci.org/Algiras/homomorphic-js) [![Known Vulnerabilities](https://snyk.io/test/npm/homomorphic-js/badge.svg)](https://snyk.io/test/npm/homomorphic-js) [![npm version](https://badge.fury.io/js/homomorphic-js.svg)](https://badge.fury.io/js/homomorphic-js) [![codecov.io](https://codecov.io/github/Algiras/homomorphic-js/coverage.svg?branch=master)](https://codecov.io/github/Algiras/homomorphic-js?branch=master) 

This library exports a **homoMorph** method, that let's you wrap your functions in type checks

```javascript
    var types = homomorphicJs.types;
    var sumToString = homomorphicJs.homoMorph(types.num, types.num, types.str)(function(nr1, nr2){ 
        return (nr1 + nr2).toString(); 
    });
    sumToString(1,2); // String "3"
    sumToString(1, "2"); // TypeError "number expected, string given"
```
 