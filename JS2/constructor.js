function C() {
    if (!(this instanceof C)) {
        throw "use new with this function";
    }
    this.a = 2;
    this.b = 5;
    // console.log("this: ",this);
    return "C says Hi";
}

console.log(C());

// const cc = new C();
// const cc2 = new C();

// // console.log(Object.getPrototypeOf(cc));
// // console.log(Object.getPrototypeOf(cc) === C.prototype);

// C.prototype.printName = function() {
//     console.log(`this.a: ${this.a}`);
// }

// console.log(Object.getPrototypeOf(cc));
// console.log(Object.getPrototypeOf(cc2));
// console.log(C.prototype);
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(cc)));

// console.log(new C());