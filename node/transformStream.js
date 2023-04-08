const {Transform} = require('stream');
const {createReadStream, createWriteStream} = require('fs');


const myTrans = new Transform ({
    transform(chunk, enc, done) {
        this.push(chunk.toString().toUpperCase());
        done();
    }
});

createReadStream("readme.txt")
    .pipe(myTrans)
    .pipe(createWriteStream("toWrite.txt"));

