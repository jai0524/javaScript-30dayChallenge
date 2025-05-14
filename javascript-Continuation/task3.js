function greet(name, UseAnotherFunction){
    console.log("Hi "+ name);
    UseAnotherFunction();
}
function AnotherFunction(){
    console.log("BYe");
}
greet("MyName", AnotherFunction);
