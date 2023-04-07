const { read } = require("fs");
const {Readable} = require("stream");

const myrobj = new Readable({
    construct(callback) {
        this._start = 0;
        this._end = 100;
        callback();
    },
    read() {
        if (this._end > this._start) {
            this.push(`${this._start} \n`);
            this._start++;
        } else {
            this.push(null);
        }
    }
});


myrobj.pipe(process.stdout);