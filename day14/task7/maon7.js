import axios from 'axios';

const url ="https://jsonplaceholder.typicode.com/posts/1"
axios.get(url)
.then(response=>{
    console.log("Data received from the api");
    console.log(response.data);
})
.catch(error=>{
    console.error(error.meddage)
})