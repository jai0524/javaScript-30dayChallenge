// // task 1 for any "word" use (/word/g)
// var text = "JavaScript is a programming language.";
// var match = text.match(/language/g);
// console.log(match); 

// // task2 for all digit use  (/\d/g)
// var text = "1 ,2,3,4,5,1,6,8,2,5,";
// var match = text.match(/\d/g);
// console.log(match); 

// // task 3 for character class and qulifiers

// var text = "Apple Akile card Ant Acr BAC ";
// var result = text.match(/[A-B][a-z]+/g);
// console.log(result);

// // task 4
// var text = "Apple 5 Akile45 card 54 Ant66 Acr 1BAC ";
// var result = text.match(/\d+/g);
// console.log(result);

// task 5
// var phone = "(123) 456-7890";
// var match = phone.match(/(\(?\d{3}\)?)[-.\s]?(\d{3})[-.\s]?(\d{4})/);
// console.log(match[0]);
// console.log(match[1]);
// console.log(match[2]);
// console.log(match[3]);

// task 6

// var email = "abc123@gmail.com";
// var matchEmail = email.match(/^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/);
// if(matchEmail){
//     const userName = matchEmail[1];
//     const domain = matchEmail[2];
//     console.log("UserName: " , userName);
//     console.log("Domain: " , domain);

// }
// else{
//     console.log("Invalid email format");
// }

// task 7

    // var str3 = "hello world";
    // const regex =/^\b\w+\b/;
    // const match = str3.match(regex);
    // if(match){
    //     console.log("first word: " , match[0]);
    // }

// task 8

// var str1 ="this is the final word";
// var str2 = " ther is no word here";
// var check= (/\bhere\b$/);
// console.log(check.test(str1));
// console.log(check.test(str2));

// var str = "hello world";
// var regex = /\b\w+\b$/;

// var match = str.match(regex);
// if ( match){
//     console.log("last word" , match[0]);
// }

// task 9
// var password = "Password@1234";
// var regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$%7!#^*&])[A-Za-z\d@$!%*?&]{8,}$/;

// if (regex.test(password)){
//     console.log("valid password", password);
// }
// else{
//     console.log("invalid password");
// }

// task 10
var website = "https://www.example.com";
const Regex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})(\/[^\s]*)?$/;
if(Regex.test(website)){
    console.log("valid url", website)
}