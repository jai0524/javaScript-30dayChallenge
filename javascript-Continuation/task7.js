function fetchUser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({userId:1, name:"ABC"})
        },1000)
    })
}
function fetchPost(userId){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log(`fetch post  `)
            resolve([
                {postId:101, postName:"Hello"},
                {postId:102, postName:"world"}
            ])
        }, 1500);
    })
}
function fetchComment(postId){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(`fetch comment  `)
            resolve([
                {commentId:201, commentName:"Comment 1"},
                {commentId:202, commentName:"Comment 2"}
            ])
        },2000)
    })
}

async function combinedData(){
 const [user,post,comment]= await Promise.all([
    fetchUser(),
    fetchPost(),
    fetchComment()
 ])
const combinedData ={
    user,post,comment
}
console.log("All the data detched ")
console.log(combinedData)
}
combinedData()

