const { createReadStream, createWriteStream,  ...fs }  = require("fs");


const rs = createReadStream("readme.txt");
const ws = createWriteStream("mywritten.txt");

rs.setEncoding("utf-8");

// rs.on("data", (chunk) => {
//     console.log(chunk);
// });


// rs.on("readable", function() {
//     console.log(this.read());
// });

// const toUpperCase = function () {}

// rs.pipe(process.stdout);

//! fourth

async function myfunc() {
    for await (chunk of rs) {
        console.log(chunk);
    }
}

myfunc();