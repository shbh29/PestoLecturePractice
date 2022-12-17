const assert = require('assert');

// class A {
//     static [Symbol.hasInstance]() {
//         return true;
//     }
// }

// let a = new A();
// console.log(a instanceof A);


// class B {
//     static [Symbol.hasInstance](otherObject) {
//         return !Array.isArray(otherObject);
//     }
// }

// console.log([] instanceof B);

class MyMatcher {
    constructor(value) {
        this.value = value;
    }
    [Symbol.match](string) {
        let indexOf = string.indexOf(this.value);
        if (indexOf === -1) {
            return null;
        }
        return this.value;
    }
}

let fooMatcher = new MyMatcher('foo');
let barMatcher = new MyMatcher('bar');

let m1, m2;
console.log(m1 = 'foobar'.match(fooMatcher));
console.log(m2 = 'foobar'.match(barMatcher));

assert.deepEqual(m1, ['foo']);
assert.deepEqual(m2, ['bar']);

