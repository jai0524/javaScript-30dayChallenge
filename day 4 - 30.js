// // Activity 1: For Loop
// // task1
// var i=1;
// for(i=1;i<=10;i++){
//     console.log(i)
// }

// // task 2
// for(j=5;j<=5;j++){
//     for(k=1;k<=10;k++){
//         console.log(`${j} * ${k} : ` + j * k);
//     }
// }

// // Activity 2: while loop
// // task 3

// let a=1;
// let sum=0;
// while(a<=10){
    
//     sum +=a;
//     a++;  
// }
// console.log(sum);

// // task 4
// b=10;
// while(b>=1){
//     console.log(b);
//     b--;
// }

// // Activity 3: do while loop.
// // taask 5

// let c=1;
// do{
//     console.log(c)
//     c++;
// }while(c<=5)
    
// // task 6

// // Activity 4
// // task7

// for(z=1;z<=5;z++){
//     let row="";
//     for(y=1;y<=z;y++){
//         row +="* "
//     }
//     console.log(row);
// }

// // task 8

// var i=65;
// row=5;

// for(j=1;j<=row;j++){
//     let rowspace="";
//     for(k=1;k<=j;k++){
//         rowspace += String.fromCharCode(i) +"";
//         i++;

//     }
//     console.log(rowspace)
// }

// // Activity 9
// // task 9
// let g=1;
// for(g=1;g<=10;g++){
    
//     if(g==5){
//         continue ;
        
//     }
//     console.log(g)
// }
// // task10
// for(o=1;o<=10;o++){
//     if(o==7){
//         break;
//     }
//     console.log(o);
// }

//                                                      // Day 5

//     //    task 1                                             
//     var a;                                    
// function EvenOdd(a) {
    
//     if (a===0) {  
//         console.log("Please enter a valid number.");
//     } else if (a % 2 === 0) {
//         console.log(`Number ${a} is even`);
//     } else {
//         console.log(`Number ${a} is odd`);
//     }
// }
// EvenOdd(0);

//     //   task 2

//     var a;
//     function findSquare(a){
//         if (a===0){
//             console.log("enter valid number");
//         }
//         else{
//             console.log(`the square of ${a} is : `+ a*a)
//         }
//     }
//     findSquare(5);

//     // task 3

//     var a;
//     var b;
//     function findMax(a,b){
//         if(a>b){
//             console.log(`${a} is greater then ${b}`)
//         }
//         else if(b>a){
//             console.log(`${b} is greater then ${a}`)
//         }
//         else{
//             console.log("values are euale")
//         }
//     }
//     findMax(5,9)

//               // task 4
// let firstWord ;
// let lastWord;

// function addString(firstWord,lastWord){

//     console.log(firstWord + lastWord);
// }
// addString("hello ","world");

//                 //   task 5
// var a;
// var b;
// let addNum = (a,b) => a+b;
// console.log(addNum(7,9));

//                 //  task 6

// let SpecialChar = (str) => /[^a-zA-Z0-9]/.test(str);
// console.log(SpecialChar("hello123"));

//             //    task 7
// var a;
// var b;
// let product=(a,b)=> a*7 ;
// console.log(product(6,b))  

//                 //  task 8
// let name;
// let age;
// let nameAge=(name,age)=> name  + 7 ;
//  console.log(nameAge("jai  "  ,age ))  
                
//                     //   task 9
// let num;
// function repeatNum(num){
//     for(let i=1;i<= num;i++){
//         console.log(num)
//     }
// }
// repeatNum(6)
//                     // task 10
// var a=5;
// let squareNum=  (a) => a*a;
// console.log(squareNum(a))   ;

// let sumNum = (squareNum,a)=> squareNum+a;
// console.log(sumNum(squareNum(a),a))

                                            //  day 6


// // Activity : Array
// // task 1

// var a =[1,2,3,4,5];
// for(i=0;i<=a.length-1;i++)
// console.log(a[i]);

// // task 2

// var a=[1,2,3,4,5];
//     console.log(a[0],a[4])

// // task 3

// var a=[1,2,3,4,5];
// console.log(a);
// a.push(6);
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
    
// }

// // task 4

// var a=[1,2,3,4,5]
// console.log(a);
// a.pop(5)
// for(i=0;i<=a.length;i++){
//     console.log(a[i])
// }

// // task 5

// var a=[1,2,3,4,5]
// console.log(a);
// a.shift(1)
// for(i=0;i<=a.length;i++){
//     console.log(a[i])
// }

// // task 6

// var a=[2,3,4,5];
// console.log(a);
// a.unshift(1)
// for(i=0;i<=a.length;i++){
//     console.log(a[i])
// }

// // task 7
// var a=[1,2,3,4,5]
// console.log(a)
// let double =a.map(a=>a*2 )
// console.log(double);

// // task 8

// var a =[1,2,3,4,5];
// console.log(a);
// let filter=a.filter(a=>a%2==0)
// console.log(filter);

// // task 9

// var a=[1,2,3,4,5];
// let reduce =a.reduce(a=> a +=a)
// console.log(reduce);

// // task 10

// var x=[1,2,3,4,5];
// for(let value of x){
//     console.log(`values are ${value}`)
// }

// // task 11

// var x=[1,2,3,4,5]
//  x.forEach((value ) => {
//     console.log(`x values are  ${value}`);

// }); 

// // task 12

// var matrix =[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// for(i=0;i<=matrix.length-1;i++){
// console.log(matrix[i]);}

// // task 13

// var matrix =[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// console.log(matrix[1]);

                                        // day 7
// Activity : Object                                        
// task 1
