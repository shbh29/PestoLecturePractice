function* cycle(arr) {
    let i = 0;
    while(true) {
        yield arr[i++ % arr.length];
    }
}

const c = cycle([5,6,7]);
console.log(c.next().value);
console.log(c.next().value);
console.log(c.next().value);
console.log(c.next().value);
console.log(c.next().value);
console.log(c.next().value);