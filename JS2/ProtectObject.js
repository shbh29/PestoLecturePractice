'use strict';
const obj = {
    a: 1
};

// Object.preventExtensions(obj);
// Object.seal(obj);
Object.freeze(obj);

// obj.a = 10;
// console.log(obj);

// delete obj.a;
// console.log(obj);

// obj.b = 1;
// console.log(obj);

console.log(Object.isExtensible(obj));
console.log(Object.isSealed(obj));
console.log(Object.isFrozen(obj));