// 'use strict';


let user = {
    fname: "Shubham",
    toString() {
        return `[fname= ${this.fname}]`;
    }
}



let names = ['arshad', 'viral', 'dhumal', 10];
names.dhumal = "varsi";


// console.log('fname' in user);

// console.log('dhumal' in names);

// console.log(10 in names);


// console.log("isPrototypeOf" in user);
// console.log(user.isPrototypeOf);
// console.log(user.isPrototypeOf(user));

// console.log("isToString a property of object: ",'toString' in user);
// console.log("isfname a property of object: ",user.hasOwnProperty('fname'));
// console.log(user.toString);

// console.log(user.toString());

// console.log(user);

// console.log(Reflect.ownKeys(Object.prototype));

console.log(Object.getOwnPropertyNames(user));




