console.log(typeof Array);
console.log(typeof String);

console.log(Array.prototype === Function.prototype);
console.log(String.prototype === Function.prototype);
console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype);
console.log(Object.getPrototypeOf(Array.prototype) === Object.prototype);
console.log(Object.getPrototypeOf(String.prototype) === Object.prototype);

console.log(Reflect.ownKeys(Array.prototype));
console.log(Reflect.ownKeys(Function.prototype));
console.log(Reflect.ownKeys(Object.prototype)); 
console.log(Object.getOwnPropertyNames(Object.prototype));// same output as one line above.
console.log(Object.getOwnPropertyNames(String.prototype));