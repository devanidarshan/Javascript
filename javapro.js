// 1. Check if a number is odd or even in javascript


// var n=33;

// if(n%2==0){
// document.write("The number is Even");
// }

// else{
//     document.write("The number is odd");
// }


// 2. Find the larger of two number

// var a=45;
// var b=23;

// if(a>b){
// document.write("The Largest number ");
// }

// else{
//     document.write("The Smallest number");
// }



// 3. Perform arithmatic operations on two numbers

// var a=23;
// var b=45;
// var c=a*b;
// document.write(c);


// 4. Find the grade for input marks


// var eng=89;
// var maths=90;
// var sci=67;

// total=(eng+maths+sci)/3;

// if(total>=90){
//     document.write("A grade");
// }

// else if(total<=90 && total>=80){
//      document.write("B grade");
// }

// else if(total<=80 && total>=70){
//     document.write("C grade");
// }

// else if(total<=70 && total>=60){
//     document.write("D grade");
// }

// else{
//     document.write("Fail");
// }

//  5. Sort three numbers

// var a=9,b=10,c=8;

// 1 evaluate

// var a=-9;
// var b=3;
// var c=a*b;
// document.write(c);

// // 2

// var a='"value is 50"';
//     document.write(a);

    
// 3

// var a=17;
// var b=5;
// var c=a%b;
// document.write(c);

// 4

// var a=5;
// var b=17;
// var c=a%b;
// document.write(c);

// 5

// var a=5;
// var b=10;
// var c=a/b;
// document.write(c);

// 6

// var a=4;
// var b=4;
// var c=a==b;
// document.write(c);

// 7

// var a=4;
// var b=5;
// var c=a!=b;
// document.write(c);

// 8

// var a=7;
// var b=8;
// var c=a<=b;
// document.write(c);


// Star Pattern Programm

// 1. square star pattern

// {
// let n = 5
//     for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         document.write("*");
//       }
//       document.write("<br>");
//     }
// }

// 2. hollow square pattern

// let n = 5; 

// for(let i = 0; i < n; i++) { 
//   for(let j = 0; j < n; j++) { 
//     if(i === 0 || i === n - 1) {
//       document.write("*");
//     }
//     else {
//       if(j === 0 || j === n - 1) {
//         document.write("*");
//       }
//       else {
//         document.write("&nbsp&nbsp");
//       }
//     }
//   }
//   document.write("<br>");
// }

// 3. right triangle pattern

// let n = 5;

// for (let i = 1; i <= n; i++) {

//   for (let j = 0; j < n - i; j++) {
//     document.write("&nbsp&nbsp");
//   }
//   for (let k = 0; k < i; k++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }

// //  4. left triangle pattern

// let n = 5;

// for (let i = 1; i <= n; i++) {
  
//   for (let j = 0; j < n - i; j++) {
//     document.write(" ");
//   }
//   for (let k = 0; k < i; k++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }

// 5. downward  triangle star pattern

// let n = 5;

// for (let i = 0; i <= n; i++) {
//   for (let j = 0; j < n-i; j++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }

// 6. hollow triangle star pattern

// let n = 6; 

// for(let i = 0; i <= n; i++) { 
//   for(let j = 0; j < i; j++) { 
//     if(i === n ) {
//       document.write("*");
//     }
//     else {
//       if(j === 0 || j === i - 1) {
//         document.write("*");
//       }
//       else {
//         document.write("&nbsp&nbsp");
//       }
//     }
//   }
//   document.write("<br>");
// }

// 7. pyramid pattern

// let n = 5;

// for (let i = 1; i <= n; i++) {
    
//   for (let j = 1; j <= n - i; j++) {
//     document.write("&nbsp&nbsp");
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }

// 8 . reversed pyramid star pattern

// let n = 5;

// for (let i = 0; i < n; i++) {

//   for (let j = 0; j <i ; j++) {
//     document.write("&nbsp&nbsp");
//   }
//   for (let k = 0; k < 2 * (n - i)-1; k++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }

// 9. hollow pyramid pattern

// let n = 5;

// for (let i = 1; i <= n; i++) {
  
//   for (let j = 1; j <= n - i; j++) {
//     document.write("&nbsp&nbsp");
//   }

//   for (let k = 0; k < 2 * i - 1; k++) {
//     if(i === 1 || i === n) {
//         document.write("*");
//     }
//     else {
//       if(k === 0 || k === 2 * i - 2) {
//         document.write("*");
//       }
//       else {
//         document.write("&nbsp&nbsp");
//       }
//     }
//   }
//   document.write("<br>");
// }


// 10. Diamond pattern 

// let n = 5;


// for (let i = 1; i <= n; i++) {
  
//   for (let j = n; j > i; j--) {
//     document.write("&nbsp&nbsp");
//   }
  
//   for (let k = 0; k < i * 2 - 1; k++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }

// for (let i = 1; i <= n - 1; i++) {
  
//   for (let j = 0; j < i; j++) {
//     document.write("&nbsp&nbsp");
//   }
  
//   for (let k = (n - i) * 2 - 1; k > 0; k--) {
//     document.write("*");
//   }
//   document.write("<br>");
// }


// 11. hollow diamond pattern


// let n = 5;

// for (let i = 1; i <= n; i++) {
  
//   for (let j = n; j > i; j--) {
//     document.write("&nbsp&nbsp");
//   }
  
//   for (let k = 0; k < i * 2 - 1; k++) {
//     if (k === 0 || k === 2 * i - 2) {
//         document.write("*");
//     }
//     else {
//         document.write("&nbsp&nbsp");
//     }
//   }
//   document.write("<br>");
// }

// for (let i = 1; i <= n - 1; i++) {
    
//     for (let j = 0; j < i; j++) {
//         document.write("&nbsp&nbsp");
//     }
    
//     for (let k = (n - i) * 2 - 1; k >= 1; k--) {
//       if (k === 1 || k === (n - i) * 2 - 1) {
//         document.write("*");
//       }
//       else {
//         document.write("&nbsp&nbsp");
//       }
//     }
//     document.write("<br>");
//   }


// 12. Hourglass star pettern

// let n = 5;

// for (let i = 0; i < n; i++) {
  
//   for (let j = 0; j < i; j++) {
//     document.write("&nbsp&nbsp");
//   }
  
//   for (let k = 0; k < (n - i) * 2 - 1; k++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }

// for (let i = 2; i <= n; i++) {
  
//   for (let j = n; j > i; j--) {
//     document.write("&nbsp&nbsp");
//   }
  
//   for (let k = 0; k < i * 2 - 1; k++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }


// 13. Right pascal star pettern

// let n = 5;

// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }
// for (let i = 1; i <= n - 1; i++) {
//   for (let j = 0; j < n - i; j++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }

// 14. Left pascal star pettern

// let n = 5;

// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < n - i; j++) {
//     document.write("&nbsp&nbsp");
//   }
//   for (let k = 0; k < i; k++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }
// for (let i = 1; i <= n - 1; i++) {
//   for (let j = 0; j < i; j++) {
//     document.write("&nbsp&nbsp");
//   }
//   for (let k = 0; k < n - i; k++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }


// 15. Heart star pettern 

// var n = 6;

// for (let i = n / 2; i < n; i += 2) {
  
//   for (let j = 1; j < n - i; j += 2) {
//     document.write("&nbsp&nbsp");
//   }
  
//   for (let j = 1; j < i + 1; j++) {
//     document.write("*");
//   }
  
//   for (let j = 1; j < n - i + 1; j++) {
//     document.write("&nbsp&nbsp");
//   }
  
//   for (let j = 1; j < i + 1; j++) {
//     document.write("*") ;
//   }
//    document.write("<br>");
// }

// for (let i = n; i > 0; i--) {
//   for (let j = 0; j < n - i; j++) {
//     document.write("&nbsp&nbsp");
//   }
//   for (let j = 1; j < i * 2; j++) {
//     document.write("*") ;
//   }
//    document.write("<br>");
// }




// NUMBER PATTERN 

// 1. triangle pattern

// let n = 5; 

// for (let i = 1; i <= n; i++) {
  
//   for (let j = 1; j <= i; j++) {
//     document.write(j);
//   }
//   document.write("<br>");
// }

// 2. triangle pattern

// let n = 5; 

// for (let i = 1; i <= n; i++) {

//   for (let j = 1; j <= i; j++) {
//     document.write(i);
//   }
//   document.write("<br>");
// }


// 3. triangle pattern

// let n = 4; 
// let count = 1;

// for (let i = 1; i <= n; i++) {
  
//   for (let j = 1; j <= i; j++) {
//     document.write(count);
//     count++;
//   }
//   document.write("<br>");
// }


// 4. reverse triangle

// let n = 5; 

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i + 1; j++) {
//     document.write(j);
//   }
//   document.write("<br>");
// }


// 5. reverse triangle

// let n = 5; 

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i + 1; j++) {
//     document.write(n - j + 1);
//   }
//   document.write("<br>");
// }


// 6. reverse triangle

// let n = 5; 

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i + 1; j++) {
//     document.write(n - j - i + 2);
//   }
//   document.write("<br>");
// }


// 7. number pyramid pattern

// let n = 5;

// for (let i = 1; i <= n; i++) {
  
//   for (let j = 1; j <= n - i; j++) {
//     document.write("&nbsp&nbsp");
//   }
  
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     document.write(k);
//   }
//   document.write("<br>");
// }


// 8. number pyramid pattern

// let n = 3;
// let count = 1;

// for (let i = 1; i <= n; i++) {
  
//   for (let j = 1; j <= n - i; j++) {
//     document.write("&nbsp&nbsp");
//   }
  
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     document.write(count);
//     count++;
//   }
//   document.write("<br>");
// }


// 9. reverse pyramid pattern

// let n = 5;

// for (let i = 1; i <= n; i++) {
  
//   for (let j = 1; j < i; j++) {
//     document.write("&nbsp&nbsp");
//   }
  
//   for (let k = 1; k <= 2 * (n - i + 1) - 1; k++) {
//     document.write(k);
//   }
//   document.write("<br>");
// }


// 10. number diamond pattern


// let n = 5;

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j < n - i + 1; j++) {
//     document.write("&nbsp&nbsp");
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     document.write(k); 
//   }
//     document.write("<br>");
// }

// for (let i = 1; i <= n - 1; i++) {
//   for (let j = 1; j < i + 1; j++) {
//     document.write("&nbsp&nbsp");
//   }
//   for (let k = 1; k <= 2 * (n - i) - 1; k++) {
//     document.write(k);
//   }
//   document.write("<br>");
// }


// 11. hourglass pattern


// let n = 5;

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j < i; j++) {
//     document.write("&nbsp&nbsp");
//   }
//   for (let k = 1; k <= 2 * (n - i + 1) - 1; k++) {
//     document.write(k);
//   }
//   document.write("<br>");
// }

// for (let i = 1; i <= n - 1; i++) {
//   for (let j = 1; j < n - i; j++) {
//     document.write("&nbsp&nbsp");
//   }
//   for (let k = 1; k <= 2 * (i + 1) - 1; k++) {
//     document.write(k);
//   }
//   document.write("<br>");
// }


// 12. number pascal pattern


// let n = 5;

// for (let i = 1; i <= n; i++) {
//   for (let k = 1; k <= i; k++) {
//     document.write(k); 
//   }
//   document.write("<br>");
// }

// for (let i = 1; i <= n - 1; i++) {
//   for (let k = 1; k <= n - i; k++) {
//     document.write(k);
//   }
//   document.write("<br>");
// }






