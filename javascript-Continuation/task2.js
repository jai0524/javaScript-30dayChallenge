console.log("1. satrting");

function syncdata(){
    console.log("2. syncdata");
}
syncdata();

setTimeout(() => {
    console.log("3. satatement call using setTimeout");
},0);

Promise.resolve().then(() => {
    console.log("4. promise method using then");
})
console.log("5. ending");