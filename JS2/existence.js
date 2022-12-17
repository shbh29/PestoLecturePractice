let obj = {name: "String"};


// existence check.
console.log('toString' in obj);
console.log(obj.hasOwnProperty('toString'));
console.log(obj.hasOwnProperty('name'));

console.log(typeof Object);