const util = require("util");
const EventEmitter = require("events");

//! ES6 way.
class MyStream extends EventEmitter {
    write(...data) {
        this.emit("data", data);
    }
}

//! ES5 METHOD
// function MyStream() {
//     EventEmitter.call(this);
// }

// util.inherits(MyStream, EventEmitter);

// MyStream.prototype.write = function(...argv) {
//     this.emit("data", argv);
// }


const instance = new MyStream();

console.log(instance instanceof EventEmitter);
console.log(MyStream.super_ === EventEmitter ); // this is something that util does.

instance.on("data", function(data) {
    console.log(`Received: ${data}`);
});

instance.write(1, 2 , "Shubham 2");
