let target = {
    name: 'Shubham'
}
let handler = {
    get(target, keyname) {
        console.log("get was called");
        // return target[keyname];
        return "run!! its a trap."
    }
}; 

const p = new Proxy(target, handler);

console.log(p.name);
console.log(p.jaiBhavani);