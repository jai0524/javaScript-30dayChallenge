// task1

function errorThrow(){
    throw new Error("something went wrong with this function")
}
try{
    errorThrow();
}
catch(error){
console.error("error occur:", error.message)
}

// task 2

function subDivisionError(a,b){
    try{ if (b===0) {
        throw new error("division by 0 is not allowed")
    }
        const result =a/b;
        console.log("result:", result);
    } catch (error) {
        console.error("error found : ", error.message);
    }
    
}
subDivisionError(8,2);
subDivisionError(5,0);

// task 3

function testExecution(){
    try {
        console.log("this is a try method");
        throw new Error("something went wrong");
        console.log("this line won't run")
        
        
    } catch (error) {
       console.log("inside the block:", error.message);
        
    }
    finally{
        console.log("this is inside a block : this is always run ")
    }
    console.log("outside the block")
}
testExecution();

// task 4

class customError extends Error {
    constructor(message) {
       super(message);
       this.name="customError";
    }
}
try{
    throw new customError("something went wrong ");   
}
catch(error){
console.error("error name", error.name);
console.error("error Message",error.message)
}

// task 5

class userInputError extends Error {
        constructor(message) {
           super(message);
           this.name="userInputError";
        }
    }
function validateInputUser(username){
    if(typeof username !== 'string' || username.trim().length<3){
throw new userInputError("user name must be string and at least 3 character")
    }
    console.log("validation error",username);
}    
try{
    const userInput="jo";
    validateInputUser(userInput);
}
catch(error){
if (error instanceof userInputError ) {
    console.error("validation error",error.message)
}
else{
    console.error("other error",error.message)
}
}

// task 6

const randompromise= new Promise((resolve,reject)=>{
    const  isSuccess = Math.random() > 0.5;
    setTimeout(()=>{
        if(isSuccess){
            resolve("Operation Successful")
        }
        else{
            reject(new Error("Something went wrong in this operation"));
        }
    },1500);
});

randompromise
.then(result=>{
    console.log("Success", result);
})
.catch(error=>{
    console.log("please try again later");
    console.error("Debug info : ",error.message)
})

// task 7

function fetchData(){
    return new Promise((resolve,reject)=>{
        const Success = Math.random > 0.5;
        setTimeout(()=>{
            if (Success){
                resolve({data: "fetching Succesful"})
            }
            else{
                reject(new Error("something went wrong in fectching data from servers")
        )}
        },1500)
    })
}

async function getFetch() {
    try {
        console.log("access the fetch data");
        const result= await fetchData();
        console.log("data received", result.data)
    } catch (error) {
        console.log("something wrong while fetching data");
        console.error("Error details: ", error.message)
    }
}
getFetch();

// task 8

fetch("https://invalid-api-endpoint.example.com/data")
.then((response) => {
    if(!response.ok){
        throw new Error("server is in a bad condition ");
    }
    return response.json();
})
.then(data=>{
      console.log("data got", data)
})
.catch((error) => {
    console.log("Error fetching data . Please check the URL is correct");
    console.error("Techanical details: ", error.message)
});

// task 9


async function fetchdatapromInvalidURL() {
    try{
        console.log("trying to fetch data")
    const response = await fetch("https://invalid-api-endpoint.example.com/data")
    if(!response.ok){
        throw new Error("server is not working");
        
    }
    const data = await response.json();
    console.log("data received", data);
    }
    catch(error){
        console.log("Error found in fetch data");
        console.error("Techanical details: ", error.message)
    }
}
fetchdatapromInvalidURL();