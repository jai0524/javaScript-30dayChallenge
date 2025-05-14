// task2

const person = {
    name: "JavaScript",
    age : 30,
     greet() {
    console.log(`hello, i am ${this.name} and i'm ${this.age} year old`);
    }
    }; 

    person.greet();
   module.exports = person;