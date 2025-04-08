// task 1
        //  function waitAndResolve(){
        //     return new Promise((resolve)=>{
        //         setTimeout(()=>{
        //         resolve("message will resolved in 2 second")
        //     },2000);
        //     });
        //     }
        
        //     waitAndResolve().then((message) => {
        //     console.log(message);
        //     });
    

            // task 2


const mypromise= new Promise((resolve,reject)=>
{
    setTimeout(() =>{
        reject(new Error("something is not good"));
    
    },2000);
})            

mypromise
.then(result=>{
    console.log("succes",result);
})
.catch(error=>{
    console.log("error caught",error.message)
})