const obj = {};

Object.prototype.MyNewProperty = true;

obj['name'] = "Shubham";

// keys, values, entries will give only enumerable entries of own object.
// console.log(Object.keys(obj).length);
// console.log(Object.values(obj).length);
// console.log(Object.entries(obj).length);

function getOwnProperties(obj) {
    let result = [];
    for( let prop in obj) {
        result.push(prop);
    }
    return result;
}

// forIn will give enumerable properties of Own and prototype object.
// console.log(getOwnProperties(obj), getOwnProperties(obj).length);

Object.defineProperty(obj, 'nonEnum', {
    value: "nonEnum value",
    writable: true,
    configurable: true,
    enumerable: false
});

// console.log(Object.keys(obj), Object.keys(obj).length);

// console.log(Object.getOwnPropertyNames(obj), Object.getOwnPropertyNames(obj).length);

// get All Properties in Hierarchy
function getAllProperties(obj) {
    let result = [];
    while(obj) {
        // console.log(Object.getOwnPropertyNames(obj));
        result = result.concat(Object.getOwnPropertyNames(obj));
        obj = Object.getPrototypeOf(obj);
    }

    return result;
}

console.log(getAllProperties(obj).length);





