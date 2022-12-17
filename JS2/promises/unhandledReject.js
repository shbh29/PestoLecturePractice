// Promise.reject({a: "Shivani"});


process.on("unhandledRejection", (err, promise) => {
    console.log("unhandled promise na bho");
});

new Promise(function(){
    throw new Error("got an Error");
});