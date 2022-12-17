// let p = new Promise((resolve, reject) => {
//     setTimeout(() => { resolve("done!");}, 1000);
// });


// setTimeout(() => {
//     p.then(console.log);
// }, 2000);

let p = new Promise((resolve, reject) => {
    resolve(10);
    resolve(20);
}).then(console.log);
