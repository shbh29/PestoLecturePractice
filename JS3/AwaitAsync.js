const result = function(marks) {
    return new Promise(function(resolve, reject){
        console.log("calculating result")
        if(marks >= 50 )
            return resolve("Your are pass.")
        return reject("You are failed.")
    });
}

const grade = function(result) {
    return new Promise((resolve) => {
        console.log("Calculating grade");
        resolve(`Your grade is A. ${result}`);
    });
}

// result(20).then((result) => {
//     console.log("Result calculated.");
//     return grade(result);
// }).then((grade) => {
//     console.log("Gradle calculated");
//     console.log(grade);
// }).catch((failedMessage) => {
//     console.log(failedMessage);
// })

async function calculateResult(marks) {
    try {
    let r = await result(marks);
    console.log("Result Calculated.")
    let g = await grade(r);
    console.log(g);
    } catch (err) {
        console.log(err)
    }
}

// function myAsyncCalculateResult(marks) {
//     console.log("padhai karne ko");
//     myAwait(result, marks)
// }

// function myAwait(func, ...args) {
//     console.log("Await call 1");
//     func(...args);
// }



// calculateResult(20);

// algo
// I should do this in last.