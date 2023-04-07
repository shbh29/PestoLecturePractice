const {Readable} = require("stream")
const util = require("util")


function myReadFn() {
    if(!(this instanceof myReadFn)) { new myReadFn().bind(this); }
    Readable.call(this);

    this._max = 100;
    this._start = 1;
}

util.inherits(myReadFn, Readable);


myReadFn.prototype._read = function() {
    if (this._max > this._start+1) {
        // this.push(this._start.toString());
        // this._start++;
        let st = String();
        buf = Buffer(st + this._start++, "ascii");
        this.push(buf);
        //! todo try buffer
    } else {
        this.push(null);
    }
}

const mrf = new myReadFn();


mrf.setEncoding("utf-8");

mrf.pipe(process.stdout);