// JavaScript CallBack Function 

// {
//     //function
//      function greet(name) {
//          console.log('Hi' + ' ' + name);
//      }
//      greet('robot');
// }

// {
//     // function
//     function greet(name, callback) {
//         console.log('Hi' + ' ' + name);
//         callback();
//     }

//     // callback function
//     function callMe() {
//         console.log('I am first callback function');
//     }

//     // passing function as an argument
//     greet("darshan" , callMe);
// }

// JavaScript Arrow Function 

// Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions.

// {
//     // function expression
//     let x = function(x, y) {
//         return x * y;
//     }
// }

// {
//     // using arrow functions
//     let x = (x, y) => x * y;
// }

// Arrow Function Syntax

// {
//     let myFunction = (arg1, arg2, ...argN) => {
//         statement(s)
//     }

//     // myFunction is the name of the function
//     // arg1, arg2, ...argN are the function arguments
//     // statement(s) is the function body
// }

// {
//     // let myFunction = (arg1, arg2, ...argN) => expression
// }
 
// Arrow Function with No Argument

// {
//     let greet = () => console.log('heyy..');
//     greet();
// }

// Arrow Function with One Argument

// {
//     let greet = x => console.log(x);
//     greet('how are you.');
// }

// Arrow Function as an Expression

// {
//     let age = 23;

//     let welcome = (age < 18) ? () => console.log('Baby') : () => console.log('Adult');

//     welcome();
// }

// Multiline Arrow Functions

// {
//     let sum = (x, y) => {
//         let result = x + y;
//         return result;
//     }
    
//     let result1 = sum(77,33);
//     console.log(result1);
// }

// this with Arrow Function

// {
//     // Inside a regular function

//     function Person() {
//         this.name = 'darshan',
//         this.age = 22,
//         this.sayName = function () {
    
//             // this is accessible
//             console.log(this.age);
    
//             function innerFunc() {
    
//                 // this refers to the global object
//                 console.log(this.age);
//             }
    
//             innerFunc();
//         }
//     }
    
//     let x = new Person();
//     x.sayName();
// }

// {
//     // // Inside an arrow function
    
//     function Person() {
//         this.name = 'darshan',
//         this.age = 22,
//         this.sayName = function () {
    
//             console.log(this.age);

//             let innerFunc = () => {
//                 console.log(this.age);
//             }
//             innerFunc();
//         }    
//     }
    
//     const x = new Person();
//     x.sayName();
// }

// You should not use arrow functions to create methods inside objects.

// {
//     let person = {
//         name: 'darshan',
//         age: 22,
//         sayName: () => {
//             console.log(this.age);
//         }
//     }
    
//     person.sayName();
// }

// Javascript Function call()

// {
//     // The call() method calls a function by passing this and specified values as arguments.

//     {
//         //function that adds two numbers 
//         function sum(a, b) {
//             return a + b;
//         }
        
//         // calling sum() function  
//         var result = sum.call(this, 12, 45);
        
//         console.log(result);
//     }
// }

// Using call() Method

// {
//     function sum(a, b) {
//         return a + b;
//       }
      
//     // invoking sum() by passing this and 'a', 'b' arguments 
//     let result = sum.call(this, 43, 34);
      
//     console.log(result);
// }

// With and Without Using call() Method

// {
//     // function that finds product of two numbers
//     function product(a, b) {
//         return a * b;
//     }
    
//     // invoking product() without using call() method
//     let result1 = product(7, 3);
    
//     console.log("Return value Without using call() method: " + result1);
    
//     // invoking product() using call() method
//     let result2 = product.call(this, 7, 3);
    
//     console.log("Return value Using call() method: " + result2);
// }

