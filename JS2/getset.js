const obj = {
    _value: 0,
    get name() {
        return this._value.toString(2);
    },
    set name(value) {
        this._value = value;
    },
    get sirname() {
        return "Singh";
    }
}


// console.log(obj);
// console.log(obj.name);
// obj.name = "ss";
// console.log(obj.name);

// console.log(obj.sirname);

obj.name = 256;
console.log(obj.name);
console.log(obj);






