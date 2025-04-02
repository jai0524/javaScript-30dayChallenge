                               //  Day 8
// Activity   template literals                                    
// task 1

let arr={
    name:"veer",
    age:15
}
console.log(`${arr.name} is ${arr.age} year old`);

// task 2

let multi =`name
age
year`
console.log(multi);

// task 3

var apple=[
    "hello",
    "hard",
    "hear",
    "half",
    "full"
]
const [a,b,c,]= apple;
console.log(a);
console.log(b);

// task 4

var bookData ={
    title:"ddsa",
    author:"me",
    year:2015
}
const {title,author}=bookData;
console.log(title);
console.log(author);

// task 5

const person=[1,2,3,4]
const newperson =[...person , 6,5];
console.log(newperson)

// task 6

const fruits =["apple", "mango","banana","pine-apple"]
const [first,second, ...rest]=fruits;
console.log(first);
console.log(second);
console.log(rest);

// task 7

function para(a,b=1){
   return a*b;
}

console.log(para(5,5))

console.log(para(8))

// task 8  
// 1. property

let hi="hello";
let num=15;

const per={hi,num}
console.log(per)

// 2.method
let user1={
    username:"kumar",
    greet : function(){
        console.log(`this ${this.username}`)
    }
}
user1.greet();

// task 9

let key ="email";
const boy={
    name: "kumar",
    [key]:"hello@gmail.com"
}
console.log(boy)