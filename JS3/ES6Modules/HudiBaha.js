let v = 1;


function inc() {
    v++;
}

function print() {
    console.log(v);
}


// module.exports = {
//     inc,
//     print
// }

// module.exports.print = print;
// module.exports.inc = inc;

export { print, inc }