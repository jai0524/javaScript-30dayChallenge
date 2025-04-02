                                    //   day 7
// Activity : Object                                        
// task 1

var book={
    title:"DSA",
    author:"Armstrong-Subero",
    year:2020
}
console.log(book);

// task 2

var book={
    title:"DSA",
    author:"Armstrong-Subero",
    year:2020
}
console.log(book.author, book.title)

// task 3


var book={
    title:"DSA",
    author:"Armstrong-Subero",
    year:2020
}

    console.log(typeof(book.author, book.title))

    // task 4

    var book={
        title:"DSA",
        author:"Armstrong-Subero",
        year:2020
    }

book.year=2013;
console.log(book.year)    

// task 5

var library={
    bookName: "data-structure",
book:{
    title:"DSA",
    author:"Armstrong-Subero",
    year:2020
}

}
console.log(library.bookName,library.book);

// task 6

var library={
    book:[
           { title:"CA",author:"Armstrong-Subero",year:2020},
           { title:"CN",author:"hello",year:2010},
            {title:"DS",author:"hi",year:2022},
            {title:"JAVA",author:"by",year:2003}
        
    
]}
for(let book of library.book){
    console.log(book.title)
}

// task 7
class Book{
    book(Bname,year){
this.Bname=Bname;
this.year=year;
    }
};
var book1 = new Book("ds", 2005);
var book2 = new Book("ca", 2015);
var book3 = new Book("cn", 2012);
var book4 = new Book("da", 2010);
var book5 = new Book("java", 2006);
var book6 = new Book("c", 2017);
var book7 = new Book("oop", 2005);
var book8 = new Book("py", 2015);
var book9 = new Book("math", 1995);
var book10 = new Book("evs", 1990);

var books = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10];
console.log(books.map(book => book.Bname));

// task 8

class Books {
    constructor(Bname, year) {
        this.Bname = Bname;
        this.year = year;
    }
}

var book1 = new Books("ds", 2005);

for (let key in book1) {
    console.log(`${key}: ${book1[key]}`);
}

// task 9
class javaBook {
    constructor(Bname, year) {
        this.Bname = Bname;
        this.year = year;
    }
}
var book1 =new javaBook("java ", 2000);
console.log(Object.keys(book1));
console.log(Object.values(book1))

     