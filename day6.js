                                            //  day 6


// Activity : Array
// task 1

var a =[1,2,3,4,5];
for(i=0;i<=a.length-1;i++)
console.log(a[i]);

// task 2

var a=[1,2,3,4,5];
    console.log(a[0],a[4])

// task 3

var a=[1,2,3,4,5];
console.log(a);
a.push(6);
for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
    
}

// task 4

var a=[1,2,3,4,5]
console.log(a);
a.pop(5)
for(i=0;i<=a.length;i++){
    console.log(a[i])
}

// task 5

var a=[1,2,3,4,5]
console.log(a);
a.shift(1)
for(i=0;i<=a.length;i++){
    console.log(a[i])
}

// task 6

var a=[2,3,4,5];
console.log(a);
a.unshift(1)
for(i=0;i<=a.length;i++){
    console.log(a[i])
}

// task 7
var a=[1,2,3,4,5]
console.log(a)
let double =a.map(a=>a*2 )
console.log(double);

// task 8

var a =[1,2,3,4,5];
console.log(a);
let filter=a.filter(a=>a%2==0)
console.log(filter);

// task 9

var a=[1,2,3,4,5];
let reduce =a.reduce(a=> a +=a)
console.log(reduce);

// task 10

var x=[1,2,3,4,5];
for(let value of x){
    console.log(`values are ${value}`)
}

// task 11

var x=[1,2,3,4,5]
 x.forEach((value ) => {
    console.log(`x values are  ${value}`);

}); 

// task 12

var matrix =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
for(i=0;i<=matrix.length-1;i++){
console.log(matrix[i]);}

// task 13

var matrix =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matrix[1]);

