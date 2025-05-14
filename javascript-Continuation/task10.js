
const myPromise = new Promise((resolve, reject) => {
    resolve("initial value ");
});
    myPromise
    .then((value)=>{
        console.log("the data is ",value);
        throw new Error("something went wrong in the promise");  
    })

.then((value)=>{
        console.log("second data",value);
    })

    .catch((error)=>{
        console.log("error caught",error);
    })