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




// // task 6

// // var library={
// //     book:[
// //            { title:"CA",author:"Armstrong-Subero",year:2020},
// //            { title:"CN",author:"hello",year:2010},
// //             {title:"DS",author:"hi",year:2022},
// //             {title:"JAVA",author:"by",year:2003}
        
    
// // ]}
// // for(let book of library.book){
// //     console.log(book.title)
// // }

// // task 7
// // class Book{
// //     book(Bname,year){
// // this.Bname=Bname;
// // this.year=year;
// //     }
// // };
// // var book1 = new Book("ds", 2005);
// // var book2 = new Book("ca", 2015);
// // var book3 = new Book("cn", 2012);
// // var book4 = new Book("da", 2010);
// // var book5 = new Book("java", 2006);
// // var book6 = new Book("c", 2017);
// // var book7 = new Book("oop", 2005);
// // var book8 = new Book("py", 2015);
// // var book9 = new Book("math", 1995);
// // var book10 = new Book("evs", 1990);

// // var books = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10];
// // console.log(books.map(book => book.Bname));

// // task 8

// class Book {
//     constructor(Bname, year) {
//         this.Bname = Bname;
//         this.year = year;
//     }
// }

// var book1 = new Book("ds", 2005);

// for (let key in book1) {
//     console.log(`${key}: ${book1[key]}`);
// }

// // task 9
// class javaBook {
//     constructor(Bname, year) {
//         this.Bname = Bname;
//         this.year = year;
//     }
// }
// var book1 =new javaBook("java ", 2000);
// console.log(Object.keys(book1));
// console.log(Object.values(book1))

let user1={
    username:"kumar",
    greet : function(){
        console.log(`hello, ${this.username}!`);
    }
};
const user = {
    name: "John",
    greet: function() {
      console.log(`Hello, ${this.name}!`);
    }
  };
  
  user.greet();
  