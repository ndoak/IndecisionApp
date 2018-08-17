'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function Person(name) {
    _classCallCheck(this, Person);

    this.name = name;
};

var me = new Person('Natalie Doak');
var other = new Person();
console.log(other);
console.log(me);
