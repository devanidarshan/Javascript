// Javascript Classes

// Creating Javascript Class

// {
//     // constructor function
//     function Person() {
//         this.name = 'darshan',
//         this.age = 22
//     }

//     // create an object
//        const Personerson1 = new Person();
// }

// {
//     // creating a class
//     class Person {
//         constructor(name) {
//             this.name = name;
//         }
//     }
// }

// {
//     // creating an object
//     class Person {
//         constructor(name) {
//             this.name = name;
//         }
//     }

//     // creating an object
//     const person1 = new Person('Raj');
//     const person2 = new Person('Veer');

//     console.log(person1.name);
//     console.log(person2.name);

//     // person1 nd person2 are objects of Person class.
// }

// Javascript Class Methods

// {
//     // constructor Function
//     function Person(name) {

//         // assigning parameter values to the calling object
//         this.name = name;

//         // defining method
//         this.greet = function(){
//             return ('Hello' + '' + this.name);
//         }
//     }
// }

// {
//     class Person{
//         constructor(name) {
//             this.name = name;
//         }

//         // defining method
//         greet() {
//             console.log('Hello ${this.name}');
//         }
//     }

//     let person1 = new Person('Cherry');

//     // accesing property
//     console.log(person1.name); 

//     // accesing method
//     person1.greet();
// }