const { write } = require("fs");
const {Writable} = require("stream");


const writeInto = [];


const mywObj = new Writable({
    write(chunk, enc, done) {
        writeInto.push(chunk);
        done();
    },
    writev(chunks, enc, done) {
        writeInto.push(...chunks);
        done();
    },
    decodeStrings: false
});


mywObj.write("Some Text");


console.log(writeInto);