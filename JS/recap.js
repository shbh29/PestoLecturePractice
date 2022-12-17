'use strict';

var $one = "1";
console.log(typeof $one);

let one = Number("abc");
console.log(one);

const newObj = Object.create(Object.prototype);
newObj.name = "Shubham";

console.log(newObj);