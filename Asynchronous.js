// Javascript setTimeout()

{
    // setTimeout(function, milliseconds);

    // function - a function containing a block of code
    // milliseconds - the time after which the function is executed
}

// The setTimeout() method returns an intervalID, which is a positive integer.

// Display a Text Once After 3 Second

{
    // // program to display a text using setTimeout method
    // function greet() {
    //     console.log('Hello world');
    // }
    // setTimeout(greet, 3000);
    // // the setTimeout() method calls the greet() function after 3000 milliseconds (3 second).
}

// The setTimeout() method returns the interval id. 

{
    // // program to display a text using setTimeout method
    // function greet() {
    //     console.log('Hello world');
    // }

    // let intervalId = setTimeout(greet, 3000);
    // console.log('Id: ' + intervalId);   
}

// Display Time Every 3 Second

{
    // // program to display time every 3 seconds
    // function showTime() {

    //     // return new date and time
    //     let dateTime= new Date();

    //     // returns the current local time
    //     let time = dateTime.toLocaleTimeString();

    //     console.log(time)

    //     // display the time after 3 seconds
    //     setTimeout(showTime, 3000);
    // }

    // // calling the function
    // showTime();
}

// The above program displays the time every 3 seconds.

// JavaScript clearTimeout()

// The syntax of clearTimeout() method is:-
{
    // clearTimeout(intervalID);
}

// Use clearTimeout() Method

{
    // // program to stop the setTimeout() method

    // let count = 0;

    // // function creation
    // function increaseCount(){

    //     // increasing the count by 1
    //     count += 1;
    //     console.log(count)
    // }

    // let id = setTimeout(increaseCount, 3000);

    // // clearTimeout
    // clearTimeout(id); 
    // console.log('setTimeout is stopped.');
}

// You can also pass additional arguments to the setTimeout() method. 

{
    // setTimeout(function, milliseconds, parameter1, ....paramenterN);
}

// When you pass additional parameters to the setTimeout() method, these parameters (parameter1, parameter2, etc.) will be passed to the specified function.

{
    // // program to display a name
    // function greet(name, lastName) {
    //     console.log('Hello' + ' ' + name + ' ' + lastName);
    // }

    // // passing argument to setTimeout
    // setTimeout(greet, 1000, 'John', 'Doe');
}

// JavaScript CallBack Function

// Program with setTimeout()

{
    // //  program that shows the delay in execution

    // function greet() {
    //     console.log('Hello world');
    // }

    // function sayName(name) {
    //     console.log('Hello' + ' ' + name);
    // }

    // // calling the function
    // setTimeout(greet, 2000);
    // sayName('John');
}
