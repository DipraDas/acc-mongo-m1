const myPromise = new Promise((resolve, reject) => {
    const user = [{}, {}, {}];
    if (!user) {
        reject("Something went wrong");
    }
    else {
        setTimeout(() => {
            resolve("Successfully got the data")
        }, 1000)
    }
})

const userIds = [1, 2, 3, 4, 5];
let userData = [];

for (let i = 0; i < userIds.length; i++) {
    userData.push(myPromise);
}
Promise.all(userData)
    .then(res => {
        console.log(res)
    })

myPromise
    .then(res => console.log("Found in then: ", res))
    .catch(err => console.log("Found in catch: ", err))
console.log("Done");


// For synchronous
// For er vetor asynchronous kono kaj handle korte hole, asyncronous function ta queue er baire cole jai, otokkhone porer loop execute hoye jai, thats why ager queue baad pore jai, tai multiple asynchronous handle Promise diye kore...