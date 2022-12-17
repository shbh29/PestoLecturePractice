function greet(name) {
    let reply = [
        name,
        this.animal,
        "sleeps between",
        this.sleepDuration
    ].join(' ');

    return reply;
}

var cats = {animal: "cats", sleepDuration: "12 and 14 hours."};
console.log(greet.call(cats));

let dogs = {animal: "dogs", sleepDuration: "2 and 4 hours."};
console.log(greet.call(dogs, "budhu ram"));