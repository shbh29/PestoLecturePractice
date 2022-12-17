function Person(name, age) {
    this.name = name;
    this.age = age;
}

const p = new Person();

console.log(Object.getPrototypeOf(p) === Person.prototype);
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype); 
console.log(Object.getPrototypeOf(Person) === Function.prototype); // a===b
console.log(Function.prototype === Object.getPrototypeOf(Function)); // b===c
console.log(Object.getPrototypeOf(Function) === Object.getPrototypeOf(Object));  // c===d 
console.log(Object.getPrototypeOf(Object) === Object.getPrototypeOf(Person)); // d===a
console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype);
console.log(Object.getPrototypeOf(Function.prototype).prototype);
console.log(typeof Object);
console.log(typeof Function);
console.log(new Function());
console.log(new Object());
console.log(p.prototype);
console.log(Object.create({}));

