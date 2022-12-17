
function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        console.log(cache);
        //const key = `${n}-${n2}`;
        const key = args.toString();
        if (cache.has(key)) {
            return cache.get(key)
        }
        cache.set(key, fn(...args));
        return cache.get(key);
    }
}

function sum(a, b) {
    return a + b;
}

const memedSum = memoize(sum);
console.log(memedSum(4,5));

function fib(n) {
    if (n < 2) {
        return n;
    }
    let answer = fib(n-1) + fib(n-2);
    return answer;
}

const fn = memoize(fib);


// console.time()
// console.log(fn(38))
// console.timeEnd()


console.time()
console.log(fn(50))
console.timeEnd()


console.time()
console.log(fn(38))
console.timeEnd()
