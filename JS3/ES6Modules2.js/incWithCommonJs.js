let {counter, inc} = require('./1');

// console.log(a);


// functions will have access to right value, but variable will be a copy.
console.log(counter)
inc();
console.log(counter);
