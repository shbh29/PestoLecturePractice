// const debounce = require('lodash/debounce');

function debounce(fn, waitTime) {
    let timoutId;
    return function(...args) {
        clearTimeout(timoutId);
        timoutId = setTimeout(() => {
            fn.call(this, ...args);
        }, waitTime);
    }
}

let user = {
    name: 'Shubham',
    printName(count) {
        console.log(`${count} ${this.name}`);
    }
}

const fn = debounce(user.printName, 1000);

for(let i=0; i<5; i++) {
    fn.call({name: i}, i);
}