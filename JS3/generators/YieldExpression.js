function* gen() {
    console.log("Start");

    console.log(`1. ${yield 5}`);
    
    console.log(`1. ${yield 10}`);
    
    console.log(`1. ${yield 12}`);

    return 20;
}

function* calle() {
    console.log(`jai bhavani: ${yield "aaa"}`);
}

function* cyc(iter) {
    while (true) {
        yield* calle();
        // for (const e of iter) {
        //     yield e;
        // }
    }
}


const g = gen();

// console.log(g.next(2));
// console.log(g.next(4));
// // console.log(g.return());
// console.log(g.throw(new Error("threw an error.")));

const c = cyc("Shubham Singh");
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());

