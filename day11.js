// task 1
         function waitAndResolve(){
            return new Promise((resolve)=>{
                setTimeout(()=>{
                resolve("message will resolved in 2 second")
            },2000);
            });
            }
        
            waitAndResolve().then((message) =>{
            console.log(message);
            });
    

            // task 2

            var mypromise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject(new Error("something  not good"));
                }, 2000);
            });
            mypromise
            .then(result => {
                console.log("success", result);
            })
            .catch(error => {
                console.log("error caught", error.message);
            });
        
        //    task 3

var  firstpromise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
                resolve(new Error("wrong thing happen"));
    },2000);
})  ;

firstpromise
.then(result=>{
    console.log(result);

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("second one is coming soon")
        },1000);
    });
})

.then(secondResult=>{
console.log(secondResult)
return `final value the from third then`
})

.then(finalResult=>{
    console.log(finalResult);
})

.catch(error=>{
    console.error(`Error caught:` ,error);
})

// task 4

function waitAndResolve(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("resolved done after 2 second")
        },2000);
    });
}

async function handelpromise() {
    console.log("waight for promise resolved");
    const result = await waitAndResolve();
    console.log("resolved value: ",result);
}
handelpromise();

// task 5


function waitAndReject(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("promise reject after 2 second")
        },2000);
    });
}

async function handelReject() {
    console.log("waight for promise");
    try{
        const result = await waitAndReject();
        console.log("resolved value",result);
}
catch(error){
    console.log("error occur", error.message);
}
}
handelReject();

// task 6

fetch ("https://jsonplaceholder.typicode.com/users")
.then (response =>{
if (!response.ok){
    throw new Error("network response not ok");
}
return response.json();
})
.then(data =>{
    console.log("data received",data);
})
.catch(error=>{
console.log("error found", error.message)
})


// task 7

async function fetchData() {
    try{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok){
        throw new Error("Network response are not ok");
    }
    const data = await response.json();
    console.log("data received",data);

} catch (error){
    console.log("error found", error.message)
}}
fetchData();

// task 8

function userDataget() {
    return fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());
}

function postDataget() {
    return fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());
}

async function fetchAllData() {
    try {
        const [users, posts] = await Promise.all([
            userDataget(),
            postDataget()
        ]);

        console.log("✅ Users:", users);
        console.log("✅ Posts:", posts);
    } catch (error) {
        console.log("🚫 Error detected:", error.message);
    }
}

fetchAllData();


// task 9

const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=> resolve("promise 1 is resolve in 2 second"),2000);
})
const promise2 =new Promise((resolve,reject)=> {
    setTimeout(()=> resolve("promise2 is resolve in 1 second"),1000);
})
const promise3=new Promise ((resolve,reject)=>{
    setTimeout(()=> resolve("promise3 resolve in 5 second"),5000);
})

Promise.race([promise1,promise2,promise3])
.then(result=>{
    console.log("first resolved value:",result);
})
.catch(error=>{
    console.log("error get:",error.message);
})