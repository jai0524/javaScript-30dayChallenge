// Callback functions
function greet(name, UseAnotherFunction){
    console.log("Hi "+ name);
    UseAnotherFunction();
}
function AnotherFunction(){
    console.log("BYe");
}
greet("MyName", AnotherFunction);

// callback Hell functions

function delay(ms){
    return new Promise (resolve=> setTimeout(resolve,ms));
}
delay(1000)
.then(()=>{
    console.log("step 1")
    return delay(1000);
})
.then(() =>{
console.log(" step 2")
return delay(1000);
})
.then(() =>{
    console.log(" step 3")
    return delay(1000);
})