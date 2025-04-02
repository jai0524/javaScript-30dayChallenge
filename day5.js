                                                     // Day 5

    //    task 1                                             
    var a;                                    
function EvenOdd(a) {
    
    if (a===0) {  
        console.log("Please enter a valid number.");
    } else if (a % 2 === 0) {
        console.log(`Number ${a} is even`);
    } else {
        console.log(`Number ${a} is odd`);
    }
}
EvenOdd(0);

    //   task 2

    var a;
    function findSquare(a){
        if (a===0){
            console.log("enter valid number");
        }
        else{
            console.log(`the square of ${a} is : `+ a*a)
        }
    }
    findSquare(5);

    // task 3

    var a;
    var b;
    function findMax(a,b){
        if(a>b){
            console.log(`${a} is greater then ${b}`)
        }
        else if(b>a){
            console.log(`${b} is greater then ${a}`)
        }
        else{
            console.log("values are euale")
        }
    }
    findMax(5,9)

              // task 4
let firstWord ;
let lastWord;

function addString(firstWord,lastWord){

    console.log(firstWord + lastWord);
}
addString("hello ","world");

                //   task 5
var a;
var b;
let addNum = (a,b) => a+b;
console.log(addNum(7,9));

                //  task 6

let SpecialChar = (str) => /[^a-zA-Z0-9]/.test(str);
console.log(SpecialChar("hello123"));

            //    task 7
var a;
var b;
let product=(a,b)=> a*7 ;
console.log(product(6,b))  

                //  task 8
let name;
let age;
let nameAge=(name,age)=> name  + 7 ;
 console.log(nameAge("jai  "  ,age ))  
                
                    //   task 9
let num;
function repeatNum(num){
    for(let i=1;i<= num;i++){
        console.log(num)
    }
}
repeatNum(6)
                    // task 10
var a=5;
let squareNum=  (a) => a*a;
console.log(squareNum(a))   ;

let sumNum = (squareNum,a)=> squareNum+a;
console.log(sumNum(squareNum(a),a))

