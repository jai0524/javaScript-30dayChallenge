function add(a,b) {
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if(b===0){
        console.log("zero not divide any number")
    }
    return a/b;
}
export{ add,subtract,multiply,divide}