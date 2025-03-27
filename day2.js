// Activity 1  Arithmetic operators
let x=5; 
let y=2;

// task 1
let c= x+y;
console.log("x+y :" +c);

// task 2
let d=x-y;
console.log("x-y: " +d);

// task 3
let e=x*y;
console.log("x*y: " +e);

// task 4
let f=x/y;
console.log("x/y: " +f);

// task 5
let g=x%y;
console.log("x%y: " +g);

// Activity 2  Assignment operators

// task 6
var h = x++;
console.log("x++ " +h);

var h =x
console.log("x: " +h);

var h =++x
console.log("++x: " +h);

// task 7
var i = x--;
console.log("x--: " +i);

var i =x
console.log("x: " +i);

var i =--x
console.log("--x: " +i);

// Activity 3 comparision operators
// task 8
var j = x<y;
console.log(j);

var j = x>y;
console.log(j);

// task 9
var j = x <= y;
console.log(j);

var j = x >= y;
console.log(j);

// task 10
var  k= x==y;
console.log(k)

var l = x===y;
console.log(l);

// Activity 4  Logical operator
// task 11
var m= (x+y==7) && (x-y==3);
console.log(m);

var m= (x+y==6) && (x-y==3);
console.log(m);

// task 12
var n= (x+y==7) || (x-y==6);
console.log(n);

var n= (x-y==7) || (x-y==6);
console.log(n);

// task 13
var o= (x+y!=7);
console.log(o);

var o= (x+y!=5);
console.log(o);

// Activity 5 ternary  operator

let variable = x>=0 ? "positive" : "negative" ;
console.log("ternary operator :"+variable);