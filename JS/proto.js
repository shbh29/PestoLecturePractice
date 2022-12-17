const { entries } = require("lodash");

const parent = {
    lname: "Singh"
}


const child = {
    fname: "Shubham",
    mname: "Dilip",
    [Symbol()]: "Hidden Values"
}

Object.setPrototypeOf(child, parent);

// console.log(child.lname);
// console.log(child)
// console.log('lname' in child)
// console.log(Reflect.ownKeys(child));

// console.log(typeof Reflect.ownKeys(Object.prototype));

for( let keys in child) {
    console.log(keys);
}

// let keysArr = Object.keys(child);

// console.log(keysArr);

// // for(let i in keysArr) {
//     // console.log(child[keysArr[i]]);
//     // console.log(`${keysArr[i]} has value ${child[keysArr[i]]}`);
// // }


// let pairArr = Object.entries(child);

// console.log("entries: ",pairArr);

// pairArr.forEach((pair) => console.log(pair));

// // for(let pair of pairArr) {
// //     const [key, value] = pair;
// //     console.log(`${key} has value.. ${value}`);
// // }


// let values = Object.values(child);

// console.log("values are as follows: ");
// values.forEach((v) => console.log(v));
