let counter = 3;
// module export
// export function inc() {
//     counter++;
// }
function inc() {
    counter++;
}

// export default function print() {
//     console.log(counter);
// }
// export function print() {
//     console.log(counter);
// }

// for commonjs export
function print() {
    console.log(counter);
}


// multiple default
// export default  {
//     print,
//     inc
// }

module.exports.inc = inc;
module.exports.print = print;
module.exports.counter = counter;