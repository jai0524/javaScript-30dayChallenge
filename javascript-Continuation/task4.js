function fetchUser(callback){
    setTimeout(()=>{
        console.log("Fetch user Data");
        callback({name: "MyName", userId: 1});
    },1000)
}
function fetchPost(userId, callback){
    setTimeout(()=>{
        console.log(`Fetched post data for user ${userId} `);
        callback([
            {  postId:101 ,title: "post1" },
            {postId:102 , title:"post2"}
        ]);
    },1000)
}

function fetchComment(postId, callback){
    setTimeout(()=>{
        console.log(`Fetched comment data for post ${postId}`);
        callback([
            {postId: 1001, comment: "nice"},
            {postId: 1002, comment: "very good"}
        ]);
    },1000)
}

fetchUser((user)=>{
    fetchPost(user.userId,(post)=>{
        fetchComment(post[0].postId,(comment)=>{
            console.log("Final output");
            console.log({
                user:user,
                post:post,
                comment: comment
            })
        })
    })
})