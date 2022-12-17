const obj = {};


obj['name'] = "Shubham";

console.log(Object.getOwnPropertyDescriptor(obj, 'name'));

Object.defineProperty(obj, 'sirname', {
    value: "Singh",
    enumerable: true
    // writable: true
    // configurable: true
});



// console.log(obj);

// for( const key in obj) {
//     console.log(key);
// }

// console.log(obj.sirname);
// console.log(obj.sirname = "Singh Sir");
// console.log(obj.sirname);


// console.log(obj.sirname);
// console.log(delete obj.sirname);
// console.log(obj.sirname);
// console.log(obj);
// console.log(Object.getOwnPropertyDescriptor(obj, 'sirname'));
// console.log(Object.getOwnPropertyDescriptor(obj));