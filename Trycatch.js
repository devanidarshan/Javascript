// JavaScript try...catch...finally Statement

// JavaScript try...catch Statement

// {
//     // // The try...catch statement is used to handle the exceptions. 
//     // try {
//     //     // body of try
//     // } 
//     // catch(error) {
//     //     // body of catch  
//     // }
// }

// Display Undeclared Variable

// {
//     // program to show try.catch in a program

//     const numerator= 60, denominator = 'a';

//     try {
//         console.log(numerator/denominator);

//         // forgot to define variable a      
//         console.log(a);
//     }
//     catch(error) {
//         console.log('An error caught'); 
//         console.log('Error message: ' + error);  
//     }
// }

// JavaScript try..catch..finally Statement

// {
//     // try {
//     //     // try_statements
//     // } 
//     // catch(error) {
//     //     // catch_statements  
//     // }
//     // finally() {
//     //     // codes that gets executed anyway
//     // }
// }

// try...catch...finally Example

// {
//     const numerator= 50, denominator = 'a';

//     try {
//         console.log(numerator/denominator);
//         console.log(a);
//     }
//     catch(error) {
//         console.log('An error caught'); 
//         console.log('Error message: ' + error);  
//     }
//     finally {
//         console.log('Finally will execute every time');
//     }
// }

// JavaScript throw Statement

// The syntax of throw statement is

// {
//     // throw expression;
// }

// {
//     // const number = 7;
//     // throw number/0; // generate an exception when divided by 0
// }

// JavaScript throw with try...catch

// {
//     // try {
//     //     // body of try
//     //     throw exception;
//     // } 
//     // catch(error) {
//     //     // body of catch  
//     // }
// }

// try...catch...throw Example

// {
//     const number = 70;
//     try {
//         if(number > 50) {
//             console.log('Success');
//         }
//         else {

//             // user-defined throw statement
//             throw new Error('The number is low');
//         }

//         // if throw executes, the below code does not execute
//         console.log('hello');
//     }
//     catch(error) {
//         console.log('An error caught'); 
//         console.log('Error message: ' + error);  
//     }
// }

// Rethrow an Exception

// {
//     const number = 5;
//     try {
//         // user-defined throw statement
//         throw new Error('This is the throw');

//     }
//     catch(error) {
//         console.log('An error caught');
//         if( number + 5 > 10) {

//             // statements to handle exceptions
//             console.log('Error message: ' + error); 
//             console.log('Error resolved');
//         }
//         else {
//             // cannot handle the exception
//             // rethrow the exception
//             throw new Error('The value is low');
//         }
//     }
// }