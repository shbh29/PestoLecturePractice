let delay = (val) => {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(`delay over - ${val}`);
        }, val);
    });
};


delay(2000)
    .then(console.log)
    .then(function() {
        return 20;
    })
    .then(function(val) {
        throw new Error("unxpected error");
        return val**2; //! 400
    })
    .then(function(val) {
        console.log(`I got ${val} from promise chianing`);
    })
    .catch(function(err){
        console.error(err);
    });



