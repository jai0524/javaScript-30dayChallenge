console.log("1. start");

setTimeout(() => {
    console.log(" 2. statement")
}, 0);

Promise.resolve().then(() => {
    console.log("3. prmise")
});
console.log("4. end");

