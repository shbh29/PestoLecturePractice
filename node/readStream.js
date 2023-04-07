//! creating custom read stream
//! install prettier
const {Readable} = require("stream");


class myReadable extends Readable {
    constructor() {
        super();
        this.start = 0;
        this.end = 100;
    }
    _read() {
        if (this.end > this.start) {
            this.push("\n" + this.start++);
        } else {
            this.push(null);
        }
    }
}

const mr = new myReadable();

mr.setEncoding("utf-8");

// mr.on("data", (chunk) => {
//     console.log(chunk);
// })


mr.pipe(process.stdout);