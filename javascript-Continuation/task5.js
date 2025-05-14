function fetchUser(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            console.log("Fetching user...");
            resolve ({userId: 1, name:"Alien"})
        },1000)
    }) 
}
function fetchPost(userId){
    return new Promise(( resolve) =>{
        setTimeout(()=>{
            console.log(`fetched post data ${userId}`)
            resolve([
                {postId:101, title:"the post 1"},
                {postId:102, title: "the post 2"},
            ])
        },1000)
    })
}
function fetchComment(postId){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(`detched comment data ${postId}`)
            resolve([
                {commentId: 201, text:"the comment 1"},
                {commentId: 202, text:"the comment 2"},
            ])
        },1000)
    })
}

// fetchUser()
// .then(user=>{
//    return fetchPost(user.userId ).then(post=>{
//     return fetchComment(post[0].postId).then(comment=>{
//         console.log("final result print here")
//         console.log({
//             user, 
//             post: post[0],
//             comment
//     })
//     })
//    })
// })

async function fetchData(){
    const user = await fetchUser()
    const post = await fetchPost(user.userId)
    const comment = await fetchComment(post[0].postId)
    console.log("final result ")
    console.log({
        user,
        post :post[1],
        comment
 } )
}
fetchData()