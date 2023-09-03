// 1. Write a Javascript function that reverse a number.

// function reversenumber(num) {
//   let reversednum = 0;
//   while (num !== 0) {
//     reversednum = reversednum * 10 + num % 10;
//     num = Math.floor(num / 10);
//   }
//   return reversednum;
// }
//     const num= parseFloat(prompt('Enter a Number: '));
//     console.log("Original number: ",+num);
//     const result = reversenumber(num);
//     console.log("Reversed number: ",+result);


// Or

  // const number = prompt('Enter a Number: ');

  // result = Number(String(number).split('').reverse().join(''));
  
  // console.log("Reversed number : ",result);
  

// Or // Arrow function for reversing the number

  //  const num = prompt('Enter a Number: ');

  //  const reverse = (num) => (String(num).split("").reverse().join(''));

  //  console.log(reverse(num));


// 2. Write a Javascript function that returns a passed string with letters in alphabetical order.

//    const string = prompt('Enter a sentence: ');

//    function alphabetorder(str){

//    return str.split('').sort().join('');
// }
//    console.log(alphabetorder(string));


// 3. Write a Javascript function that accepts a string as a parameter and counts the number of vowels within the string.

// function countVowel(str) { 

//   const count = str.match(/[aeiou]/gi).length;
//   return count;
// }

// const string = prompt('Enter a string: ');

// const result = countVowel(string);

// console.log("Number of vowels:", result);


//  4. Write a Javascript program to get the current date.

// let date = new Date().toDateString();

// console.log(date);


// 5. Write a Javascript program to calculate number of days left until next Christmas.

// let todayDate = new Date();
// console.log("Today's date is defined as: ", todayDate)

// let christmasYear = todayDate.getFullYear();

// if (todayDate.getMonth() == 11 && todayDate.getDate() > 25) {
//    christmasYear = christmasYear + 1;
// }

// let christmasDate = new Date(christmasYear, 11, 25);
// let dayMilliseconds = 1000 * 60 * 60 * 24;
// let daysLeft = Math.ceil(
//    (christmasDate.getTime() - todayDate.getTime()) / (dayMilliseconds));

// console.log("The number of days left for christmas is: ", daysLeft);


// 6. Write a Javascript program to calculate multiplication and division of two numbers.

// var num1 = prompt("Enter first number:");
// var num2 = prompt("Enter second number:");

//   result = num1 * num2;
//   console.log("Multiplication = ", result );
//   result = num1/num2;
//   console.log("Division = ", result );

// Or

// function multiplyBy()
// {
        
//         num1 = document.getElementById("firstNumber").value;
//         num2 = document.getElementById("secondNumber").value;

//         document.getElementById("result").innerHTML = num1 * num2;
// }

// function divideBy() 
// { 
//         num1 = document.getElementById("firstNumber").value;
//         num2 = document.getElementById("secondNumber").value;

//         document.getElementById("result").innerHTML = num1 / num2;
// }


// 7. Write a Javascript program that accept two integers and display the larger.

// var num1 = prompt("Enter first number:");
// var num2 = prompt("Enter second number:");

// if (num1 > num2) {
//   console.log("The largest number is: ", +num1);
// }
// else if(num2 > num1) {
//   console.log("The largest number is: ", +num2);
// } else {
//   console.log(+num1, " is equal to ", +num2);
// }

// 8. Write a function to calculate simple interest based on the principle amount.

// let P = prompt("Enter the Principal amount: ");
// let R = prompt("Enter the Rate of interest: ");
// let T = prompt("Enter the Time in years: ");

// let interest = (P * R * T) / 100;

// console.log("Simple Interest: ", interest);


// 9. Write a function to calculate compound interest based on the principle amount.

// let P = prompt("Enter the Principal amount: ");
// let R = prompt("Enter the Rate of interest: ");
// let T = prompt("Enter the Time in years: ");

// 	let A = P * (Math.pow((1 + R / 100), T));
// 	let CI = A - P;

// 	console.log("Compound interest is: ", CI);


// 10. Write a function to generate a random number.

// const a = Math.floor(Math.random()*10000);
// console.log(a);


// 11. Write a function to find the count of a letter in a string.

// function charcount(str, letter) 
// {
//  var letterCount = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letterCount += 1;
//       }
//   }
//   return letterCount;
// }

// console.log(charcount('Hello World...', 'l'));

// 12. Check if a number is odd or even in javascript.

// const number = prompt("Enter a number: ");

// if(number % 2 == 0) {
//     console.log("The number is even.");
// }
// else {
//     console.log("The number is odd.");
// }

// 13. Find the largest of two number.

// var first = Number(prompt('Enter first number: '));
// var second = Number(prompt('Enter second number: ')); 

// function largest(first, second) {
//   if(first > second)
//     return first;

//   else
// 		return second;
//   }
//    console.log(largest(first, second));


// 14. Find check if a year is leap year or not.

// const year = prompt('Enter a year: ');
// checkLeapYear(year);

// function checkLeapYear(year) {

//   if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//       console.log(year + ' is a leap year.');
//   } else {
//       console.log(year + ' is not a leap year.');
//   }
// }


// 15. Find the grade for input marks.

// const marks = [68,89,58];

// function calculateGrade(marks) {
// let summ = 0;

//   for (let i = 0; i < marks.length; i++) {
//     summ += marks[i];
//   }

//   const avg = summ / marks.length;
//   console.log (avg.toFixed(2));

//   let grade = '';

//   if (avg < 59) {
//     grade = 'FAIL';

//   } else if (avg <= 69) {
//     grade = 'Grade: D';

//   } else if (avg <= 79) {
//     grade = 'Grade: C';

//   } else if (avg <= 89) {
//     grade = 'Grade: B';

//   } else {
//     grade = 'Grade: A';
//   }
//   return grade;
// }
//   console.log(calculateGrade(marks));






     