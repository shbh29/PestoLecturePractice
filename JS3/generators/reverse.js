function* reverse(iter) {
    for(let i = iter.length -1; i >= 0; i--) {
        yield iter[i];
    }
}

for(let e of reverse([1,2,3,4,5,6])) {
    console.log(e);
}