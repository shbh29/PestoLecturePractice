function* get() {
    let f1 = 0, f2 = 1;
    let f3 = f1 + f2;
    while(f3 < 500) {
        yield f3;
        f1 = f2;
        f2 = f3;
        f3 = f1 + f2;
    }
}

let obj = {
    [Symbol.iterator]() {
        let f1, f2 = 0;
        let f3 = 1;
        return {
            next() {
                f1 = f2;
                f2 = f3;
                f3 = f1 + f2;
                return {"value": f3, done: f3 > 500};
            }
        }
    }
}

function* take(n, iterable) {
    let i = 0;
    for (const e of iterable) {
        yield e;
        i++;
        if (i > n) { break; }
    }
}

let g = get()

// console.log(g.next().value);
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

// console.log("loop")
// for (const e of get()) {
//     console.log(e)
// }

// console.log("second loop");
// for(const e of obj) {
//     console.log(e);
// }


const jet = take(10, get());
for(const e of jet) {
    console.log(e);
}