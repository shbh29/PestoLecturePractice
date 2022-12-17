const fs = require('fs');

console.log("Start");

// sync callback
// [1,2,3,4].forEach(x => console.log(x));

// async callback
// setTimeout(() => {
//     console.log("middle");
// },0);
console.log(__filename);

fs.readFile('promises/a.txt', (err, data) => {
    console.log(`data - ${data}`);
});


console.log("end");