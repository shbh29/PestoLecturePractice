"use strict";
function a() {
    console.log(`In a prints: ${this}`);
    return this;
}

// a();
console.log(typeof a.call(2) === 'object');
// console.log(a.apply(null) === global);
console.log(`a prints: ${a.bind(this)}`);