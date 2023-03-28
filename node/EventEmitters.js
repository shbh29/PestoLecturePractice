const EventEmitter = require("events");

const newInstance = new EventEmitter();

// Event emitter binds the function call to instance.
newInstance.on("myEvent", function(...argv) {
    console.log("handler was called!");
    console.log(argv);
    console.log(this === newInstance);
});


// thick array this is exports
newInstance.on("myEvent", (...argv) => {
    console.log("handler was called!");
    console.log(argv);
    console.log(this === exports);
});

newInstance.emit("myEvent", 1, 2, "Shubham");



