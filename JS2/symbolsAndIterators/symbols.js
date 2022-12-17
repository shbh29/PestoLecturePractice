let redsym = Symbol("red");
let bluesym = Symbol("blue");
let newBlue = Symbol("blue");
let redCopy = redsym;
console.log(redCopy === redsym);
console.log(bluesym === redsym);
console.log(bluesym === newBlue);

let obj = {
    a: 'Shubham',
    [Symbol('purple')]: "Jai Ram Ji Ki"
};

obj[redsym] = "value2";


console.log(obj);

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
console.log(Object.getOwnPropertySymbols(obj));


let a = Number('9');
let b = Number('9');

console.log(a===b);