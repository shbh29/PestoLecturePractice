const fs = require("fs");

const ws = fs.createWriteStream("file.txt");

ws.write("Here is ");
ws.write("some text");
ws.end("for you");