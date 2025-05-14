function racer1(){
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve("Racer 1 finished")
        }, 2000)
    })
}
function racer2(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("racer 2 finished second")
        },2500)
    })
}
function racer3(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("racer 3 finished third")
        },3000)
    })
}

async function winner(){
    console.log("race start now")
    const result = await Promise.race([
        racer1(),
        racer2(),
        racer3()
    ])

    console.log("All the racers finished race ",result)
    
}
winner();