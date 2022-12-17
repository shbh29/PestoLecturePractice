const obj = {
    toString() {
        return "over ridden toString";
    },
    getNumber() {
        return 43;
    }
}


const child = {name: "Shubham Singh"};

Object.setPrototypeOf(child, obj);
// console.log(obj.toString());

// const child = Object.create(obj);
// console.log("Object.create:",child.getNumber());

// console.log("obj.isPrototypeOf(child): ",obj.isPrototypeOf(child));

// console.log("getprotype with ===", Object.getPrototypeOf(child) === obj);

//! not recommended as not supported by all browsers
console.log("dunder proto: ", child.__proto__);

console.log("How will object print if toString funtion present: ",child);

child.__proto__ = null;

console.log("dunder proto: ", child.__proto__);

console.log("check if to String Present: ", child.toString);

console.log("How will object print if no toString: ",child);