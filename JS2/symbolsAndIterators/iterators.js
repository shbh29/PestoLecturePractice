let obj = {
    i: 0,
    [Symbol.iterator]() {
        return this;
    },
    next() {
        return {value: this.i++, done: this.i > 10};
    },
    return() {
        console.log("abrupt completion");
        this.i = 0;
        return {done: true};
    }
}


// const arr = [new MyIterator(), new MyIterator(), new MyIterator()];

for (const a of obj) {
    console.log(a);
    if(a > 5) break;
}

console.log("after a break: ");

for( const a of obj) {
    console.log(a);

}