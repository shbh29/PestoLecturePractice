class Person {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log("name: ", this.name);
    }
}

class Employee extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    printId () {
        console.log("id: ", this.id);
    }
}

const e1 = new Employee("Shubham", 27);
const e2 = new Employee("Sneha", 26);

console.log(e1);
console.log(e2);

e1.printId();
e1.printName();