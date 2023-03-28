#!/usr/bin/env node

const _ = require("lodash");

// installed and used a dependency using npm
// console.log(_);

// process variable used to access environment variables
// console.log(process.env.HOSTNAME);

// argv access
// console.log(process.argv[2]);

// accessing locally declared MYVAR
console.log(process.env.MYVAR);

console.log("Hello NOde module!");
const EventEmitter = require("events");

const newInstance = new EventEmitter();

newInstance.on("myEvent", function(...argv) {
    console.log("handler was called!");
    console.log(argv);
});


newInstance.emit("myEvent", 1, 2, "Shubham");