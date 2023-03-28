const myfs = require("fs");
const fsPromised = require("fs/promises");

// console.log(myfs.openSync("readme.txt","r+"));

// console.log(myfs.open("readme.txt","r+", (err, fd) => {
//     if(err) { throw new Error("Error Opening File: Ss"); }
//     console.log("this function was called!");
//     console.log(`File descriptor: ${fd}`);
// }));

// async function myfunc() {
//     var fh = await fsPromised.open("readme.txt", "r+");
//     console.log(fh.readFile());
// }


// async function myfunc() {
//     const data = await fsPromised.readFile("readme.txt", "utf8");
//     console.log(data);
// }


async function myfunc() {
    const d = await fsPromised.writeFile("mywritten.txt", "This is the content", "utf-8");
    console.log(d);
}
myfunc();