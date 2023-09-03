// Javscript async / await

// Async 

// {
//     // async function example

//     async function f() {
//         console.log('Async function.');
//         return Promise.resolve(1);
//     }
//     f(); 
// }

// {
//     async function f() {
//         console.log('Async function.');
//         return Promise.resolve(1);
//     }
    
//     f().then(function(result) {
//         console.log(result)
//     });
// }

// {
//     // A promise
//     let promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//         resolve('Promise resolved')}, 4000); 
//     });

//     // async function
//     async function asyncFunc() {

//         // wait until the promise resolves 
//         let result = await promise; 

//         console.log(result);
//         console.log('hello');
//     }

//     // calling the async function
//     asyncFunc();
// }

// {
//     let promise1;
//     let promise2;
//     let promise3;

//     async function asyncFunc() {
//         let result1 = await promise1;
//         let result2 = await promise2;
//         let result3 = await promise3;

//         console.log(result1);
//         console.log(result1);
//         console.log(result1);
//     }
// }

// The other way you can handle an error is by using try/catch block.

// {
//    // A promise
//     let promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//         resolve('Promise resolved')}, 4000); 
//     });

//     // async function
//     async function asyncFunc() {
//         try {
//             // wait until the promise resolves 
//             let result = await promise; 

//             console.log(result);
//         }   
//         catch(error) {
//             console.log(error);
//         }
//     }

//     // calling the async function
//     asyncFunc(); // Promise resolved 
// }

// Javascript setInterval()

    // setInterval()
    // setTimeout()

// Display a Text Once Every 1 Second

// {
//     // program to display a text using setInterval method
//     function greet() {
//         console.log('Hello world');
//     }

//     setInterval(greet, 1000);
// }

// Display Time Every 5 Seconds

// {
//     // program to display time every 5 seconds
//     function showTime() {

//         // return new date and time
//         let dateTime= new Date();

//         // return the time
//         let time = dateTime.toLocaleTimeString();

//         console.log(time)
//     }

//     let display = setInterval(showTime, 5000);
// }

// Use clearInterval() Method

// {
//     // program to stop the setInterval() method after five times

//     let count = 0;

//     // function creation
//     let interval = setInterval(function(){

//         // increasing the count by 1
//         count += 1;

//         // when count equals to 5, stop the function
//         if(count === 5){
//             clearInterval(interval);
//         }

//         // display the current time
//         let dateTime= new Date();
//         let time = dateTime.toLocaleTimeString();
//         console.log(time);

//     }, 2000);
// }

// {
//     // program to display a name
//     function greet(name, lastName) {
//         console.log('Hello' + ' ' + name + ' ' + lastName);
//     }

//     // passing argument to setInterval
//     setInterval(greet, 1000, 'John', 'Doe');
// }