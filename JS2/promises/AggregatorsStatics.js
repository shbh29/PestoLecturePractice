function sleep(delay, value) {
    return new Promise(function(resolve) {
        setTimeout(function() {resolve(value)}, delay);
    });
}

Promise.all([sleep(5000, "a"), sleep(4000, 'b'), sleep(3000, 'c')
    ])
    .then((v) => console.log(v, typeof v))
    .catch((reason) => console.log(reason));

