const p = new Promise((resolve, reject) => {
    setTimeout(()=> {
        console.log("After timeout");
        reject(new Error("Too Loong"));
    }, 1000);
});



p
    .then((val) => {console.log(`Jai Shree Ram - ${val}`)})
    .catch((val) => {console.log(`error - ${val}`)})
    .finally(() => {console.log(`will this have same value as then - NO`)});

// p.then(
//     (val) => { console.log(val) },
//     (val) => { console.log(`error - ${val}`)}
// );
