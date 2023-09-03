// 1. Display Alert in Javascript

// {
//     window.alert("hello world");
//     alert("how are you");
//     alert("pause");
// } 

// 2. Display Confirmation box using Javascript

// {
//     confirm("Press a button!");
// }

// 3. Display Prompt box using Javascript

// {
//     var age=prompt('how old are you');
//     var nmaes=prompt('what is your name');
//     var input=prompt('how are you');
// }    

// 4. Mouseover and mouseout in Javascript

// function mouseOver() {
//      document.getElementById("demo").style.color = "red";
// }
// function mouseOut() {
//     document.getElementById("demo").style.color = "black";
// }

// 5. Use keypress in Javascript to Display Alerts

// function myFunction() {
//     document.getElementById("demo").style.backgroundColor = "red";
// }    

// 6. Javascript Validation Examples

// function myFunction() {

//     let x = document.getElementById("numb").value;
//     let text;
//     if (isNaN(x) || x < 1 || x > 10) {
//       text = "Input Not Valid";
//     } else {
//       text = "Input OK";
//     }
//     document.getElementById("demo").innerHTML = text;
//   }

// Or 7. Textbox required validation in javascript

// 8. Email validation in Javascript

// function validateEmail(inputText) {
//     var mailFormat =  /\S+@\S+\.\S+/;
//     if (inputText.value.match(mailFormat)) {
//       alert("Valid Email Address!");
//       return true;
//     } else {
//       alert("Invalid Email Address!");
//       return false;
//     }
//   }
  
// 9. Letter Validation in Javascript

// function nameValid(){
//     var n=document.getElementById('name');
//     var ptrn=/^[A-Za-z]+$/;
//       if(n.value.match(ptrn)){
//          alert('Valid Input');
//         }
//       else{
//          alert('Invalid Input');
//     document.getElementById('name');
//     }
// }

// 10. Number Validation in Javascript

// function myFunction() {
//     let x = document.getElementById("numb").value;
//     let text;
//     if (isNaN(x) || x < 1 || x > 1000) {
//       text = "Input not valid";
//     } else {
//       text = "Input OK";
//     }
//     document.getElementById("demo").innerHTML = text;
//   }

// 11. Letter and Number validation in Javascript

// function nameValid(){
//     var n=document.getElementById('name');
//     var ptrn=/^[A-Za-z0-9]*$/;
//       if(n.value.match(ptrn)){
//          alert('Valid Input');
//         }
//       else{
//          alert('Invalid Input');
//     document.getElementById('name');
//     }
// }

// 12. IP address Validation

// 13. Retrieve Today's Date in Javascript

// const date = new Date();
// console.log(date);

// 14. Reverse Array Javascript

// const fruits = ["Surat", "Jaipur", "Assam", "Delhi"];
//  console.log(fruits.reverse());

// 15. Javascript Concat or Merge Two Array
  
// const arr1 = ["yello", "red"];
// const arr2 = ["pink", "blue", "white"];
// const colors = arr1.concat(arr2);
// console.log(colors);

// 16. Reverse String in Javascript

// let string = prompt("Enter a String");
// let reversedString = string.split("").reverse().join ("");
// console.log(reversedString);

// 17. Javascript Open a page using window.open() method

// function openWindow() {  
//     window.open('https://www.google.com');  
//     }  

// 18. if else Statement in javascript

// const hour = new Date().getHours(); 
// let greeting;

// if (7 < 12) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }
// console.log(greeting);

// 19. Insert Element in Array

// {
//    const vehicles=["bus","bycycle","car"];
//    vehicles.push("truck");
//    console.log(vehicles);
// }

// 20. Get current url Javascript

// document.getElementById("demo").innerHTML = 
// "The full URL of this page is:<br>" + window.location.href;

// 21. getElementByClassname() method in Javascript

// const collection = document.getElementsByClassName("example");
// collection[0].innerHTML = "Hello World!";

// 22. getElementByTagName() method in javascript

// const collection = document.getElementsByTagName("li");
// document.getElementById("demo").innerHTML = collection[1].innerHTML;

// 23. Disable Browser back and forward button in browser using Javascript

// window.history.forward();

// Or.24. Disable back button in browser using Javascript
// Or 25. Disable Forward button in browser using Javascript
// Or 26. Disable Forward button in browser using Javascript

// 27. Disable Dropdown list using Javascript

// function disable() {
//     document.getElementById("mySelect").disabled=true;
// } 

// 28. Enable Dropdown list using Javascript

// function Enable() {
//     document.getElementById("mySelect").Enabled=true;
// }  

// 29. Disable mouse right click using Javascript

// document.addEventListener("contextmenu", (event) => {
//     event.preventDefault();
//  });

// 30. Javascript Date Countdown Timer

// var countDownDate = new Date("aug 14, 2023 10:46:00").getTime();

// var x = setInterval(function() {

//     var now = new Date().getTime();
  
//     var distance = countDownDate - now;
  
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
//     document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//     + minutes + "m " + seconds + "s ";
  
//     if (distance < 0) {
//       clearInterval(x);
//       document.getElementById("demo").innerHTML = "EXPIRED";
//     }
//   }, 1000);

// 31. checkbox validation using Javascript 

// function validateForm(form)
// {
//     console.log("checkbox checked is ", form.agree.checked);
//     if(!form.agree.checked)
//     {
//         document.getElementById('agree_chk_error').style.visibility='visible';
//         return false;
//     }
//     else
//     {
//         document.getElementById('agree_chk_error').style.visibility='hidden';
//         return true;
//     }
// }

// 32. Get query string value in javascript

// 33. Javascript get or set radio button value

// function displayRadioValue() {
//     var ele = document.getElementsByName('gender');

//     for (i = 0; i < ele.length; i++) {
//         if (ele[i].checked)
//             document.getElementById("result").innerHTML
//                 = "Gender: " + ele[i].value;
//     }
// }

// 34. Get radio button selected value using javascript

// function displayRadioValue() {
//     document.getElementById("result").innerHTML = "";
//     var ele = document.getElementsByTagName('input');
//     for (i = 0; i < ele.length; i++) {
//         if (ele[i].type = "radio") {

//             if (ele[i].checked)
//                 document.getElementById("result").innerHTML
//                     += ele[i].name + " Value: "
//                     + ele[i].value + "<br>";
//         }
//     }
// }

// 35. set radio button value using Javascript

// const yesBtn = document.getElementById('yes');

// yesBtn.checked = true;
// yesBtn.checked = false;

// 36. Javascript screen height

// let height = screen.height;
// console.log(height);

// 37. auto refresh page javascript

// setTimeout(() => {
//     document.location.reload();
//   }, 3000);

// 38. Convert Celsius value to Farenheit Value in Javascript

// var cel = prompt("Enter a celsius value: ");

// var fahrenheit = (cel * 1.8) + 32

// console.log(`${cel} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);

// 39. Javascript get today's date

// const d = new Date();
// console.log(d);

// 40. Scroll Down Event in Javascript

// function myFunction() {
//     document.getElementById("demo").innerHTML = "You scrolled in div.";
//   }

// 41. Javascript Animation example

// image.onclick = function() {
//     let start = Date.now();

//     let timer = setInterval(function() {
//       let timePassed = Date.now() - start;

//       image.style.left = timePassed / 5 + 'px';

//       if (timePassed > 2000) clearInterval(timer);

//     }, 20);
//   }

// 42. Play and Pause video in Javascript

// let vid = document.getElementById("myVideo"); 
// ​
// function playVid() { 
//     vid.play(); 
// } 
// ​
// function pauseVid() { 
//     vid.pause(); 
// } 

// 43. Change background color of div javascript

// function changeStyle(){
//     var element = document.getElementById("myDiv");
//     element.style.backgroundColor = "#00FF00";
// }

// 44. Change the page colour in Every 5 sec in Javascript

// setInterval(
//     function () {
//       var randomColor = Math.floor(Math.random()*16777215).toString(16);
//       document.body.style.backgroundColor = "#"+randomColor;
//     },5000);

// 45. Display message every 3 sec using Javascript

// setInterval(()=>{
//     alert("Hello World")
// },3000);

// 46. Javascript get max value in array of objects

// const arr = [{id: 1}, {id: 7}, {id: 3}, {id: 14}];

// const ids = arr.map(object => {
//   return object.id;
// });
// console.log(ids); //  [1, 7, 3, 14]

// const max = Math.max(...ids);
// console.log(max); //  14

// const min = Math.min(...ids);
// console.log(min); //  1

// 47. Sort and Reverse an array of Objects using Javascript

// const numbers = [4, 2, 5, 1, 3];
// numbers.sort((a, b) => a - b);
// console.log(numbers); // [1, 2, 3, 4, 5]

// const colors = ["yello", "pink", "black", "red"];
// colors.reverse();
// console.log(colors);

// 48. Find index of largest value in an array in javaqscript

// const arr = [3, 5, 8, 100, 20];

// const max = Math.max(...arr);

// const index = arr.indexOf(max);
// console.log(index); // 3

// 49. Try and Catch in Javascript

// try {
//     adddlert("Welcome guest!");
//   }
//   catch(err) {
//     document.getElementById("demo").innerHTML = err.message;
//   }

// 50. Return Boolean value of an Integer in Javascript

// let obj = new Boolean(23);

// console.log(obj.valueOf());

// 51. Javascript check an object is an array or not

// // Creating some variables
// var v1 = {name: "John", age: 18};   
// var v2 = ["red", "green", "blue", "yellow"];
// var v3 = [1, 2, 3, 4, 5];
// var v4 = null;

// // Testing the variables data type
// document.write(typeof(v1) + "<br>"); // Prints: "object"
// document.write(typeof(v2) + "<br>"); // Prints: "object"
// document.write(typeof(v3) + "<br>"); // Prints: "object"
// document.write(typeof(v3) + "<hr>"); // Prints: "object"

// // Testing if the variable is an array
// document.write(Array.isArray(v1) + "<br>");  // Prints: false
// document.write(Array.isArray(v2) + "<br>");  // Prints: true
// document.write(Array.isArray(v3) + "<br>");  // Prints: true
// document.write(Array.isArray(v4));           // Prints: false

// 52. Display table number in javascript

// // take number input from the user
// const number = parseInt(prompt('Enter an integer: '));

// // take range input from the user
// const range = parseInt(prompt('Enter a range: '));

// //creating a multiplication table
// for(let i = 1; i <= range; i++) {
//     const result = i * number;
//     console.log(`${number} * ${i} = ${result}`);
// }

// 53. Reload page javascript

// location.reload();

// 54. Break and Continue in Javascript

// for (let i = 0; i < 10; i++) {
//   if (i === 3) { 
//     break;
//  }
//   console.log(i);
// }


// for (let i = 0; i < 10; i++) {
//     if (i === 3) {
//         continue;
//     }
//      console.log(i);
// }

// 55. Javascript conditional Operator

// function myFunction() {
//     let age = document.getElementById("age").value;
//     let voteable = (age < 18) ? "Too young":"Old enough";
//     document.getElementById("demo").innerHTML = voteable + " to vote.";
//   }

// 56. Example of this keyword in javascript

// const person = {
//     firstName: "Sara",
//     lastName: "Hilary",
//     id: 787,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
//   document.getElementById("demo").innerHTML = person.fullName();

// 57. Javascript Validation API

// 58. Javascript set dropdown value on button Click

// function myFunction() {
//     document.getElementById(
//       "mySelect").selectedIndex = "1";
// }

// 59. Display images Based on User Selection

// 60. Javascript Bind Array Value into Dropdown list

// 61. Javascript Browser Detection

// 62. How to sort Array value using sort() method in javascript

// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a-b});
// console.log(points);














