const c = console.log.bind(console);





let p = new Promise((resolve, reject) => {
    let a = 1 + 2;
    if (a == 2) {
        resolve("oh yeah done babe");

    } else {
        reject("shit error thrown")
    }
})

p.then((message) => {
    c(message)
}).catch(message => {
    c(message);
})

// c("starting")

// setTimeout(() => {
//     console.log("waited some seconds");
// }, 1000);


// c("end")


function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    console.log("calling Ended")
        // expected output: "resolved"
}

asyncCall();