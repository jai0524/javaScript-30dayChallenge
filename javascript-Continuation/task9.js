async function hello(a,b){
    try{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            
                if (a > b){
                    resolve("a is greater than b")
                }
                else{
                    reject("a is less than b")
                }
            
        }, 2000)
    })
}
catch(err){
        console.log("Error:",err)
        
    }}
    hello(15,10)
    .then(result => console.log(" Result:", result))
  .catch(error => console.log(" Caught Error:", error));
