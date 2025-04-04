// Activity 1 if else statement
// task 1

x=5;
if (x==0) {
    console.log("the value is equal to zero");
    
} 
else if(x<0) {
    console.log("the number is negative");
}
else{
    console.log("the number is positive")
}

// task 2

const age= 15;
if (age>=18) {
    console.log(" teh person is eligible for voting ")
} else {
   console.log("the person is underAge and not eligible") 
}

// Activity 2 nested if else
// task 3

let a=10;
let b =6;
let c=5;

if(a>b ){
    if(a>c){
        console.log("A is a biggest value ")
    }
    else {
        console.log("C is the biggest value");
    }
}
else{
    if(b>c){
        console.log("B is the biggest value")
    }
    else{
        console.log("C is the biggest value");
    }
}   

// Activity 3
// task 4

let day=4;

switch(day){
    case 1: 
    console.log("Monday");
    break;
    case 2: 
    console.log("Tuesday");
    break;
    case 3: 
    console.log("Wednesday");
    break;
    case 4: 
    console.log("Thursday");
    break;
    case 5: 
    console.log("Friday");
    break;
    case 6: 
    console.log("Saturday");
    break;
    case 7: 
    console.log("Sunday");
    break;

    default:
        console.log("Invalid day")
        break;
}

// task 5

grade=90;
switch(grade){
    case 90:
        console.log("A grade");
        break; 

        case 80:
        console.log("B grade");
        break; 
        case 70:
        console.log("C grade");
        break; 
        case 60:
        console.log("D grade");
        break;
         case 50:
        console.log("E grade");
        break;
        case 32:
        console.log("F grade");
        break;  
}

// task 6
  z=15;
let num = z%2==0 ? "z is even" : "z is odd";
console.log(num)

// task 7

year =2025;

if (year%4==0){
  console.log("the year is leap year")
}
else{
  console.log("this year is not leap year")
}