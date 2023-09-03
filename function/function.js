// Javascript Function and Function Expressions

// A Function  is a block of code that performes a specific task.

// Suppose you need to create a program to create a circle and color it. you can create two functions to solve this problem.

// A function to draw the circle

// A function to color the circle

// Dividing a complex problem into smaller chunks makes your program easy to understand and reusable.

// javascript also has a huge number of inbuilt functions. For example, Math.sqrt() is a function to calculate the square root of a number.

// {
//     // Declaring a function
//     function namesoffunction () {
//         // function body
//     }

//     // A function is declared using the function keyword.
//     // The basic rules of naming a function are similar to naming a variable. It is better to write a descriptive name for your function. For example, if a function is used to add two numbers, you could name the function add or addnumbers.
//     // The body of function is written within {}.

//     {
//         // declairing a function named greet()
//          function greet(){
//               console.log("Hello there");
//         }

//         // Calling a function

//         // function call
//         greet();
//     }
// }


// 1. Function parameters

// A function can also be declared with parameters. A parameter is a value that is passed when declaring a function .

// {
//     // Function with parameters

//     // program to print the text
//     // declairing a function
//     function greet(name){
//         console.log("Hello" + name +":)");
//     }

//     // variable name can be different
//     let name = prompt("Enter a name: ");

//     // Calling function
//     greet(name);
// }

// 2. Add Two Numbers

// {
//     // program to add two numbers using a function
//     // declaring a function
//     function add(x,y){
//         console.log(x+y);
//     }

//     // calling functions
//     add(12,34);
//     add(4,8);

//     // The function is declared with two parameters x and y.
//     // The function is called using its name and passing two arguments 12 and 34 in one and 4 and 8 in another.
// }


// 3. Function Reeturn

// The return statement can be used to return the value to a function call.

// The return statement denotes that the function has ended. Any code after return is not executed.

// If nothing is returned, the function returns an ub=ndefined value.

// {
//     // Sum of Two number

//     // program to add two numbers
//     // declairing a function
//     function add(a,b){
//         return a+b;
//     }

//     // take input from the user
//     let number1 = parseFloat(prompt("Enter first number: "));
//     let number2 = parseFloat(prompt("Enter second number: "));

//     // calling function
//     let result = add(number1,number2);

//     // display the result
//     console.log("The sum is : " + result);
// }

// Benefits of using a function

// Function makes the code reusable. You can declare it once and use it multiple times.
// Function makes the program easier as each small task is divided into a function.
// function increses readability.

// 4. Function Expressions

{
    // program to find the square of a number
    // function is declared inside the variable
    // let x = function(num) {return num*num};
    // console.log(x(5));

    // can be x is used to store the finction. here the function is treated as an expression.
    // The function above is called an anonymous function.
}