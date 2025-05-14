function simulateData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
           resolve(" data fetched")
        },2000)
    })
}

async function fetchData(){
    console.log(" fetching data ")
    const result = await simulateData();
    console.log("result:", result)
}
fetchData();