const foos = new WeakSet();

class My {
    constructor() {
        foos.add(this);
    }
    method() {
        if(!foos.has(this)) {
            throw new Error("Incompatible Object");
        }
    }
}

let a = new My();

a.method.call({});