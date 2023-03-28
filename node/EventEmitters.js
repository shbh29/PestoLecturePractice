const EventEmitter = require("events");

// const newInstance = new EventEmitter();

// newInstance.on("myEvent", function(...argv) {
//     console.log("handler was called!");
//     console.log(argv);
// });


// newInstance.emit("myEvent", 1, 2, "Shubham");


function MyStream() {
    EventEmitter.call(this);
}