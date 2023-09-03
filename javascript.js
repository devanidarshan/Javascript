// using console in javascript

// {
//     console.log("Hello word");
//     console.log("hello javascript");
//     console.log(80);
//     var a=50;
// }


// variables in javascript

// {
//     names="css";
//     console.log(names);
//     var names="ddd";
//     console.log(names);

//     var names="foo";
//     var names="javascripts";
//     console.log(names);

//     var thisis=15;
//     var thatis=45;
//     console.log(thisis*thatis);

//     var box1="toys";
//     var box1="cloths";
//     console.log(box1);
// }

// new html element add in thought javacript

// {
    // var newelement=document.createElement("h1");
    // newelement.textContent="hello world";
    // document.body.innerHTML(newelement);

    
    // var newelement=document.createElement("marquee");
    // newelement.textContent="hello world";
    // document.body.innerHTML(newelement);

    
//     var newelement=document.createElement("p");
//     newelement.textContent="how are you!";
//     document.body.innerHTML(newelement);
// }

// window alert() in javascript

// {
//     window.alert("hello world");
//     alert("how are you");
//     alert("pause");
// }

// windows prompt() in javascript

// {
//     var age=prompt('how old are you');
//     var nmaes=prompt('what is your name');
//     var input=prompt('how are you');
// }    

// using the DOM api

// {
//     var a=40;
//     var b="hey,i am javascript don't afraid of me";
//     var b=40;
//     document.getElementById("demo1").innerHTML=a;
//     document.getElementById("demo2").innerHTML=b;
// }

//  let variable (blockscope variables)

// {
//     let boxx1="toys1";
//     boxx1="toys2"
//     let boxx2="cloths1";
//     boxx2="cloths2";
//     boxx2="foo";
//     document.getElementById("demo3").innerHTML=boxx1; 
// }

// const variable (blockscope variables)

// {
//     const toys="bus";
//     const toys1="car";
//     document.getElementById("demo4").innerHTML=toys;
// }



// declaration var()
// {
// var x="box" * 10;
// var foo_fal=20
// }

// incorrect declaired
// {
// var 123=50;
// var *aa=50;
// console.log(x);
// console.log(foo.fal);
// }

// declaration Let()


// {
//     {
//         let num=10;
//         console.log(num);
//     }
//     let num=20;
//     document.write(num);
// }

// {
//     let num=10;
//     console.log(num);
//     function fun(){
//         document.write(num);
//     }
//     fun();
// }

// {
//     function fun(){
//         let num=10;
//         console.log(num);
//     }
//     fun();
//     console.log(num);
// }

// {
//     let x=25;
//     {
//        let x=77;
//        {
//         let x=23;
//         console.log(x);
//        }
//        console.log(x);
//     }
//     console.log(x);
// }

// {
//     let x=77;
//     {
//         // let x=23;llegal
//         console.log(x);
//         document.write(x);
//     }
//     // let x=67;
//     // console.log(x);  illegal
// }

// Declaration cons()

// {
//     const x=22;
//     x=13;
//     x+=1;
// }


// Arithmatic operator

// Addition

// {
//     var a=20;
//     var b=20;
//     var c=a+b;
//     console.log(c);
// }

// Substraction

// {
//     var a=45;
//     var b=23;
//     var c=b-a;
//     console.log(c);
// }

// Multiplication

// {
//     var a=23;
//     var b=45;
//     var c=a*b;
//     console.log(c);
// }

// Division

// {
//     var a=23;
//     var b=45;
//     var c=a/b;
//     console.log(c);
// }

// Modulus

// {
//     var a=50;
//     var b=25;
//     var c=a%b;
//     console.log(c);
// }

// Increment

// {
//     var a=50;
//     console.log(a++);
// }

// Decrement

// {
//     var a=56;
//     console.log(++a);
// }

// Exponentiational

// {
//     var a=50;
//     var b=3;
//     var c=b**a;
//     console.log(c);
// }

// {
//     var a=3;
//     var b=1;
//     var c=b+=a;
//     var c=b-=a;
//     var c=b*=a;
//     var c=a%=b;
//     var c=a/=b;
//     var c=a**b;
//     // console.log(c);
//     document.getElementById("demo1").innerHTML= c;
// }

// {
//     var a=11;
//     var b=10;
//     var c=a==b;
//     var c=a===b;
//     var c=a>=b;
//     var c=a<=b;
//     var c=a>b;
//     var c=a<b;
//     var c=a!=b;
//     document.getElementById("demo4").innerHTML=c;
// }

// Logical Operater

// (a&&b) =>false
// (a||b) =>true
// !(a&&b) =>true


// {
//     var a= false;
//     var b= true;
//     // document.getElementById("demo4").innerHTML=a&&b;
//     // document.getElementById("demo4").innerHTML=a||b;
//     // document.getElementById("demo4").innerHTML=!(a&&b);

// }

// Miscellaneous operator

// java script array method

// const names=['ddd','www','ggg','ooo'];
// const names2={person1:'www',person2:'ggg',person3:'ooo'};
// console.log(names2.person3);
// document.write=(names2.person1);


// if statement

// var age="19";

// if(age >=18){
//     document.write("Qualifies for driving");
// }

// if-else statement

// var age=99;

// if(age>=18){
//     document.write("Qualifies for driving");
// }

// else{
//     document.write(" does not Qualifies for driving");

// }

// if else if statement

// var book="economics";

// if(book=="history"){
//     document.write("history book");
// }

// else if(book=="maths"){
//     document.write("maths book");
// }

// else if(book=="economics"){
//     document.write("economics book");
// }

// else{
//     document.write("unknown book");
// }



// switch statement

// let input=1;

// {
//     if(input===1){
//         document.write("continous..");
//     }
//     else if (input==="y"){
//         document.write("continous..");
//     }
//     else if (input==="yes"){
//         document.write("continous..");
//     }
//     else if (input=="0"){
//         document.write("end..");
//     }
//     else if (input=="n"){
//         document.write("end..");
//     }
//     else if (input=="no"){
//         document.write("end..");
//     }
//     else{
//         document.write("wrong choice");
//     }
// }


// break

// switch(input){
//     case "1":
//     document.write("continous..");
//     break;

//     case "y":
//     document.write("continous..");
//     break;

//     case "yes":
//         document.write("continous..");
//         break;

//      case "0":
//          document.write("end..");
//          break;
         
//      case "n":
//          document.write("end..");
//          break;    

//      case "no":
//          document.write("end..");
//          break;  
         
//      default :
//      document.write("wrong choice"); 
//    }    
   

// while loop

// let counter=8;
// while(counter<=10){
//     document.write("hello"+"<br/>");
//     counter++;
// }

// {
//     let counter=10;
//     let sum =0;
//     while(counter<=11){
//         if(counter%2==0){
//             sum =sum+counter;
//         }
//         counter++;
//     }
//     document.write(sum);
// }


// do while loop

// {
// let counter=0;
// do{
//     document.write(counter+"<br/>");
//     counter++;
//     }while(counter<=26);
// }


// for loop

// {
//     for(i=1;i<=5;i++)
//     {
//         document.write(i+"<br/>");
//     }
// }


// Break , Continue and Nested loop

// {
//     for(let counter = 1; counter<=10;counter++){
//         if(counter==5){
//             break;
//         }
//         document.write(counter);
//         document.write("br>");
//     }
// }

// {
//     for(let counter=1;counter<=10;counter++){
//         if(counter==5){
//         continue;
//     }
//     if(counter==6){
//         continue;
//     }
//     document.write(counter);
//     document.write("<br>");
//   }
// }  


// {
//     link: for(let counter=1;counter <=10;counter ++){
//         document.write(counter);
//         document.write("<br>");

//         for(let counter2=1;counter2<4;counter2++){
//             if(counter==3){
//             break link;
//         }
//         document.write("hello");
//         document.write("<br>");
//     }
//   }
// }


// Javascript string method

// string length()

// {
//     let text="this is javascript language";
//     let length=text.length;
//     console.log(length);
// }


// string slice()

// {
//     let fruits="apple , mango, watermalon, strawberry";
//     let part=fruits.slice(5,20);
//     console.log(part);
// }


// string substring()

// {
//     let fruits="apple , mango , watermalon , strawberry";
//     let part=fruits.substring(12 , -5);
//     console.log(part);
// }


// string substr()

// {
//     let fruits="apple , mango , watermalon , strawberry";
//     let part=fruits.substr(10 , 10);
//     console.log(part);
// }


// string replace()

// {
//     let text="please visit skillqode visit and visit again";
//     let change = text.replace(/visit/g,"most");
//     document.write(change);
// }

// {
//     let text="please visit micrasolllp";
//     let change = text.replace(/micrasolllp/i,"skillqode");
//     document.write(change);
// }


// string replaceAll()

// {
//     let text="I love cats. but Cats are very easy to love.Cats are very popular.but Cats Dengerous";
//     let change=text.replaceAll("cats","dogs");
//     let changee=text.replaceAll("Cats","Dogs");
//     document.write(change+changee);
//     document.write(changee);
// }

// string toUpperCase()

// {
//     let text="I love cats.but Cats are very easy to love.Cats are very popular.but Cats Dengerous";
//     let text1=text.toUpperCase();
//     document.write(text1);
// }

// string toLowerCase()

// {
//         let text="PLAESE FOLLOW THE RULES";
//         let text1=text.toLowerCase();
//         document.write(text1);
// }       

// string concat()

// {
//     let text1="hello";
//     let text2="Word";
//     let text3=text1.concat(" ",text2);
//     let text4=text3.length;
//     document.write(text3);
//     document.write(text4);
// }

// string trim()

// {
//     let demotext="     this is javascript.    ";
//     let demo=demotext.trim();
//     document.write(demo);
// }


// string trimstart()

// {
//      let demotext="         this is javascript.      ";
//      let demo=demotext.trimStart();
//      console.log(demo);
// }


// string trimend()

// {   
//     let demotext="    this is javascript.        ";
//     let demo=demotext.trimEnd();
//     console.log(demo);

// }


// string padstart()

// {
//     let demotext="5";
//     let demo=demotext.padStart(7, "0");
//     console.log(demo);
// }

// string padend()


// {
//     let demotext="5";
//     let demo=demotext.padEnd(5, "0");
//     console.log(demo);
// }


// string charat()

// {
//     let demotext="this is string value";
//     let demo=demotext.charAt(12);
//     console.log(demo);
// }


// string charcodeat()

// {
//     let demotext="this is string value";
//     let demo=demotext.charCodeAt(8);
//     console.log(demo);
// }

// string split()

// {
//     let text = "Hello"
//     const  myArr = text.split ("");

//     text = " ";
//     for(let i = 0; i < myArr.length ;i++){
//         text += myArr[i] + "<br>"
//     }
//     document.write(text);
// }


// string search method

// string indexof()

// {
//     let fruits="apple, mango,watermalon,strawberry,lemon";
//     let part =fruits.indexOf("go");
//     console.log(part);
// }

// {
//          let fruits="apple, mango,watermalon,strawberry,lemon";
//          let part =fruits.indexOf("o",5);
//          console.log(part);
// }

// string lastindexof()

// {
//         let fruits="apple, mango,watermalon,strawberry,lemon";
//         let part =fruits.lastIndexOf("mango");
//         console.log(part);
// }

// {
//        let fruits="apple, mango,watermalon,strawberry,lemon";
//        let part =fruits.lastIndexOf("o",20);
//        console.log(part);
// }


// string search()

// {
//     let fruits="javascript is 'most' popular language";
//     let part=fruits.search("most");
//     console.log(part);
// }

// {
//     let fruits="javascript is 'most' popular language";
//     let part=fruits.search("/most/i");
//     console.log(part);
// }

// string match()

// {
//     let text="this is javascript match method";
//     let part = text.match(/j/);
//     console.log(part);
// }

//string matchAll() / reminder with array

// {
//     let text="this is javascript match method";
//         let part = text.match(/is/g);
//         console.log(part);
// }


// string startwith()

// {
//     let text="hello word,welcome to the universe";
//     let part=text.startsWith("hello");
//     console.log(part);
// }

// {
//     let text="hello word,welcome to the universe";
//     let part=text.startsWith("hello",0);
//     console.log(part);
// }


// string endwith()

// {
//      let text="hello word,welcome to the universe";
//      let part=text.endsWith("hello");
//      console.log(part);
// }

// {
//      let text="hello word,welcome to the universe";
//      let part=text.startsWith("hello");
//      console.log(part);
// }

// javascript template literals

// back-tics syntex

// {
//     let text='hello world!';
//     console.log(text);
// }

// quotes inside string

// {
//     let text=`he's name 'joe'`;
//     console.log(text);
// }

// allow multiline string

// {
//     let text =`this
//     is infinite pages`;
//     console.log(text);
// }

//  javascript Array 

// const fruits=[];
// fruits.push("banana","apple","peach");
// console.log(fruits.length);
// fruits[5]="mango";
// console.log(fruits[5]);
// console.log(Object.keys(fruits));
// console.log(fruits.length);
// fruits.length=10;
// console.log(fruits);
// console.log(Object.keys(fruits));
// console.log(fruits.length);
// console.log(fruits[8]);
// fruits.length=2;-2
// console.log(Object.keys(fruits));
// console.log(fruits.length);


// Array length properties

// let newarray=["black","red","white","blue"];
// console.log(newarray[3],newarray[3]);

// {
//     const newarrays=[
//         "one",
//           "two",
//              "three",
//                  "four"];

//     newarrays[1] = "five"; 
//     console.log(newarrays); 
//     console.log(newarrays.length);           
// }

// Accessing the first array element

// {
//     const fruits=["dragon","Orange","Apple","Mango"];
//     console.log(fruits[0]);
// }


// Accessing the last array element

// {
//     var fruits =["Banana","Orange","Apple","Mango"];
//     document.getElementById("demo1").innerHTML=fruits[fruits.length-2];
// }


// Adding array element

// {
//     const fruits=["Banana","Orange","Apple"];
//     document.getElementById("demo1").innerHTML=fruits;

//     function myfunction(){
//         fruits.push("Lemon");
//         document.getElementById("demo1").innerHTML=fruits;
//     }
// }


// {
//        const fruits=["Banana","Orange","Apple"];
//         document.getElementById("demo1").innerHTML=fruits;
    
//       function myfunctionn(){
//             fruits[fruits.length]="Lemon";
//         document.getElementById("demo1").innerHTML=fruits;
//          }
//  }


// Adding elements with hight indexes can create undefined "holes" in an array.

// {
//     const fruits=["Banana","Orange","Apple"];
//     fruits[6]="Lemon";
//     console.log(fruits);

//     let fLen=fruits.length;
//     let text="";
//     for(i=0;i<fLen;i++){
//     text += fruits[i] + "<br>";
//     }
//     document.getElementById("demo1").innerHTML = text;
// }


// Array Methods

// Converting Array to String

// {
//     const fruits=["Banana","Orangr","Apple"];
//     console.log(fruits.toString());
// }

// The join() method also joins all array elements into a string

// {
//     const fruits=["Banana","Orang","Apple","Mango"];
//     document.getElementById("demo1").innerHTML=fruits.join(" ' ");
// }


// popping and pushing

// {
//     const fruits=["Banana","Orange","Apple","Mango"];
//     document.getElementById("demo1").innerHTML=fruits;
//     fruits.pop();
//     fruits.pop();
//     document.getElementById("demo1").innerHTML=fruits;
// }


// The pop() method returns the value that was "poped out"

// {
//     const fruits=["Banana","Orange","Apple","Mango"];
//     document.getElementById("demo1").innerHTML=fruits.pop();
//     document.getElementById("demo2").innerHTML=fruits;
// }


// Javascript array push()

// The push() method adds a new element to an array(at the end)

// {
//     const fruits=["Banana","Apple","Mango"];
//     document.getElementById("demo1").innerHTML=fruits;
//     fruits.push("kiwi");
//     document.getElementById("demo2").innerHTML=fruits;
// }


// The push() method returns the new array length

// {
//     const fruits=["Banana","Orange","Apple","Mango"];
//     document.getElementById("demo1").innerHTML=fruits.push("kiwi");
//     document.getElementById("demo2").innerHTML=fruits.length;
// }


// Shifting elements
// Javascript Array shift()

// The shift() method removes the first array element and "shifts" all other elements to a lower index

// {
//     const fruits=["Banana","Orange","Apple","Mango"];
//     document.getElementById("demo1").innerHTML=fruits;
//     fruits.shift();
//     fruits.shift();
//     document.getElementById("demo2").innerHTML=fruits;
// }

// The shift() method returns the value that was "shifted out"

// {
//     const fruits=["Banana","Orange","Apple","Mango"];
//     document.getElementById("demo1").innerHTML=fruits.shift();
//     document.getElementById("demo2").innerHTML=fruits;
// }

// Javascript Array unshift()
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older element

// {
//     const fruits=["Banana","Orange","Apple","Mango"];
//     document.getElementById("demo1").innerHTML=fruits;
//     fruits.unshift("lemon");
//     document.getElementById("demo2").innerHTML=fruits;
// }

// The unshift() method returns the new array length

// {
//     const fruits=["Banana","Orange","Apple","Mango"];
//     document.getElementById("demo1").innerHTML=fruits.unshift("lemon");
//     document.getElementById("demo2").innerHTML=fruits;
// }

// Changing elements

// {
//     const fruits=["Banana","Orange","Apple","Mango"];
//     document.getElementById("demo1").innerHTML=fruits;
//     fruits[1]="kiwi";
//     document.getElementById("demo2").innerHTML=fruits;
// }

// Javascript Array add element

// {
//     const fruits=["Banana","Orange","Apple","Mango"];
//     document.getElementById("demo1").innerHTML=fruits;
//     fruits[fruits.length]="kiwi";
//     document.getElementById("demo2").innerHTML=fruits;
// }

// Javascript Array delete
// Array elements can be deleted using the javascript operator delete
// Using delete leaves undefined holes in the array
// Use pop() 0r shift() instead

// {
//     const fruits=["Banana","Orange","Apple","Mango"];
//     document.getElementById("demo1").innerHTML=fruits;
//     delete fruits[2];
//     fruits[2]="kiwi";
//     document.getElementById("demo2").innerHTML=fruits;
// }

// Merging (Concating Arrays)

// {
    //     const mygirls=["Cecilie","Lone"];
    //     const myboys1=["Emil","Tobias","Linus"];
    //     const myboys2=["ajay","vijay","sunjay"];
    //     const mychildren=mygirls.concat(myboys1,myboys2);
    //     document.getElementById("demo2").innerHTML=mychildren;
    //     console.log(mychildren);
    // }
    
    // The concat() method does not change the existing arrays.it always returns a new array.
    
    // Splicing and Slicing Array
    
    // Javascript Array splice()
    
    // {
        //     const fruits=["Banana","Orange","Apple","Mango"];
        //     document.getElementById("demo1").innerHTML=fruits;
        
        //     fruits.splice(0,3,"Lemon","kiwi","watermelon");
        //     document.getElementById("demo2").innerHTML=fruits;
        // }
        
        // {
            //      const fruits=["Banana","Orange","Apple","Mango"];
            //      document.getElementById("demo1").innerHTML="Original array:<br>"+fruits;
            
            //      let removed=fruits.splice(2,2,"lemon","kiwi");
            //      document.getElementById("demo2").innerHTML="new array:<br>"+fruits;
            
            //      document.getElementById("demo3").innerHTML="removed items:<br>"+removed;
            // }
            
//  Using splice() to remove elements
            
// {
//      const fruits=["Banana","Orange","Apple","Mango"];
//     document.getElementById("demo1").innerHTML=fruits;
//     fruits.splice(0,1);
//     document.getElementById("demo2").innerHTML=fruits;
// }

// Javascript array slice()

// {
//     const fruits=["Banana","Orange","Apple","Mango"];
//     const newremove=fruits.slice(1);
//     document.getElementById("demo1").innerHTML=fruits+"<br><br>"+newremove;
// }

// Array.isArray

// {
//     let book=["math","chemistry","physics","bio"];
//     let books="string";
//     console.log(Array.isArray(book));
// }

// Javascript sorting array

// {
//     let book = ["math","chemistry","physics","bio"];
//     let books = book.sort();
//     console.log(books);
// }

// Reversing array

// {
//     let book = ["math","chemistry","physics","bio"];
//     console.log(book);
//     let bookss=book.reverse();
//     console.log(bookss);
//     let books=book.sort();
//     console.log(books);
// }

// number sort

// {
//     const number1=[40,12,34,81,150,200];
//     console.log(number1);
//     const number2 = number1.sort(function(a,b){return a-b});
//     console.log(number2);
// }

// Javascript array iteration

// {
//     const number1=[40,12,34,81,150,200];
//     let number2="";
//     number1.forEach(myfunction);

//     document.write(number2);
//     function myfunction(value,index,array){
//     number2 += value *2 + "<br>";
//     }
// }


// javascript array fill method

// {
//     const fruits=["Banana","Orange","Lemon","Apple","Mango"];
//     const newfill=fruits.fill("1",3);
//     console.log(newfill);
// }


// Javascript array copywithin() method

// {
//     const fruits=["Banana","Orange","Lemon","Apple","Mango","Watermalon","Kiwi","olive"];
//     const newcopy=fruits.copyWithin(2,4);
//     console.log(newcopy);
// }

// javascript valueof() method

// {
//     const fruits=["Banana","Orange","Lemon","Apple","Mango","Watermalon","Kiwi","olive"];
//     const newfruits=fruits.valueOf();
//     console.log(newfruits);
// }

// Javascript flat() method

// {
//     const fruits=[1,2,3,[4,[5,6,[7,8,9]]]];
//     const newarray1=fruits.flat();
//     const newarray2=fruits.flat(2);
//     const newarray3=fruits.flat(3);
//     const newarray4=fruits.flat(4);
//     console.log(newarray1);
//     console.log(newarray2);
//     console.log(newarray3);
//     console.log(newarray4);
// }
 

// Math.PI

// let valueofpi=Math.PI;
// console.log(valueofpi);

// Math.round()

// Math.round(x) returns the nearest integer

// let math1=Math.round(4.5);      //5
// console.log(math1);
// let math2=Math.round(4.4);       //4
// console.log(math2);

// Math.ceil()

// Math.ceil returns the value of x rounded up to its nearest integer

// let math3=Math.ceil(4.9);
// console.log(math3);            // 5
// let math3_1=Math.ceil(3.8);
// console.log(math3_1);          // 4
// let math3_2=Math.ceil(-4.3);
// console.log(math3_2);         // -4

// Math floor()

// math floor(x) returns the value of x rounded down to its nearest integer.

// let math4 = Math.floor(4.9);
// console.log(math4);                 // 4
// Math.floor(4.2);                    // 4
// Math.floor(-4.3);                   // -5

// Math.trunc()

// Math.trunc(x) returns the integer part of x.

// let math5 = Math.trunc(5.9);
// console.log(math5);                   // 5
// Math.trunc(4.2);                      // 4

// Math.sign()
// Math.sign(x) returns if x is negative, null or positive

// let math6 = Math.sign(15);
// console.log(math6);               // 1
// let Math6_1 = Math.sign(-180);    
// console.log(Math6_1);             // -1
// let Math6_2 = Math.sign(0);
// console.log(Math6_2);             // 0

// Math pow()
// Math.pow(x,y) returns the value of x to the power of x.

// let math7 = Math.pow(5,5);        // 3125
// console.log(math7);

// Math.sqrt()
// Math.sqrt(x) returns the square root of x.

// let math8 = Math.sqrt(64);
// console.log(math8);                  // 8

// Math.abs()
// Math.abs(x) returns the absolute (positive) value of x.

// let math9 = Math.abs(-6);
// console.log(math9);                      // 6
// let math9_1 = Math.abs(1.2);
// console.log(math9_1);                    // 1.2

// Math.min() and Math.max() 
//Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments.

// let math10 = Math.min(0,150,30,20,-8,-200,-250);        // -250
// console.log(math10);
// let math11 = Math.max(0,150,30,20,-8,-200,-250);        // 150
// console.log(math11);

// Math.random()
// Math.random() returns a number between 0 (inclusive) , and 1 (excusive).

// let math12 = Math.random();
// console.log(math12);                         // random value
// let math13 = Math.floor(Math.random()*100);
// console.log(math13);                        // random value


// Javascript Date objects

// New Date()

// {
//     const dates = new Date();
//     console.log(dates);
// }

// New Date(date string)

// {
//     const dates = new Date("2023-07-14");
//     console.log(dates);
// }

// New Date(year,month)

// {
//     const dates = new Date(2023,3);
//     console.log(dates);
// }

// New Date(year,month,day)

// {
//     const dates = new Date(2023,3,15);
//     console.log(dates);
// }

// New Date(year,month,day,hour)

// {
//     const dates = new Date(2023,3,16,16);
//     console.log(dates);
// }

// New Date(year,month,day,hour,minutes)

// {
//     const dates = new Date(2023,3,16,6,15);
//     console.log(dates);
// }

// New Date(year,month,day,hour,minutes,seconds)

// {
//     const dates = new Date(2023,11,6,6,15,20);
//     console.log(dates);
// }

// New Date(milliseconds)

// {
//     const dates = new Date(2000);
//     console.log(dates);
// }

// Javascript ISO standard time

// {
//     const dates = new Date(2023,3,16,6,15,20);
//     console.log(dates.toString());
//     console.log(dates.toDateString());
//     console.log(dates.toUTCString());
//     console.log(dates.toISOString());
// }

// Javascript Date Formats
// ISO Date , Short Date , Long Date

// {
//     const dates = new Date("2024");
//     console.log(dates);
// }

// ShortDate

// {
//     const dates = new Date("03/25/2023");
//     console.log(dates);
// }

// LongDate

// {
//     const dates = new Date("march 23 2023");
//     console.log(dates);
// }

// {
//     const dates = new Date("23 march 2023");
//     console.log(dates);
// }

// Date Input - Parsing Dates

// {
//     let msec = Date.parse("March 21,2012");
//     console.log(msec);
// }

// Javascript Get Date Methods

// getFullyear() - Get year as a four digit Number (yyyy);
// getmonth() - Get month as a number (0-11)
// getDate() - Get day as a number (1-31)
// getDay() - Get weekday as a number (0-6)
// getHours() - Get hour (0-23)
// getMinutes() - Get minute (0-59)
// getSeconds() - Get second (0-59)
// getMilliseconds() - Get millisecond (0-999)
// getTime() - Get time (milliseconds since january 1,1970)

// {
//    const dates = new Date();
//    console.log(dates);
//    let getyear = dates.getFullYear();
//    let  getmonth = dates.getMonth();
//    let getdate = dates.getDate();
//    let getday = dates.getDay();
//    let gethours = dates.getHours();
//    let getminutes = dates.getMinutes();
//    let getseconds = dates.getSeconds();
//    let getmilliseconds = dates.getMilliseconds();
//    let gettime = dates.getTime();

//    console.log(getyear);
//    console.log(getmonth);
//    console.log(getdate);
//    console.log(getday);
//    console.log(gethours);
//    console.log(getminutes);
//    console.log(getseconds);
//    console.log(getmilliseconds);
//    console.log(gettime);
// }

// Javascript set Date Methods

// setDate() - Set the day as a number (1-31)
// setFullYear() - Set the year (optionally month and day)
// setHours() - Set the hour (0-23)
// setMilliseconds() - Set the milliseconds (0-999)
// setMinutes() - Set the minutes (0-11)
// setMonth() - Set the month (0-11)
// setSeconds() - Set the seconds (0-59)
// setTime() - Set the time (milliseconds since january 1, 1970)

// {
//     const dates = new Date();
//     dates.setFullYear(2020);
//     console.log(dates);
// }

// {
//     const dates = new Date();
//     dates.setMonth(11);
//     console.log(dates);
// }

// {
//       const dates = new Date();
//       dates.setDate(25);
//       console.log(dates);
// }

// {
//     const dates = new Date();
//     dates.setHours(12);
//     console.log(dates);
// }

// {
//     const dates = new Date();
//     dates.setMinutes(15);
//     console.log(dates);
// }

// {
//     const dates = new Date();
//     dates.setSeconds(45);
//     console.log(dates);
// }

// {
//     const dates = new Date();
//     dates.setMilliseconds(10000);
//     console.log(dates);
// }

// {
//     const dates = new Date();
//     dates.setTime();
//     console.log(dates);
// }


// Javascript number methods

// toString() - Returns a number as a String
// toExponential() - Returns a number written in exponential notation
// toFixed() - Returns a number written with a number of decimals
// toPrecision() - Returns a number written with a specified length
// Valueof() - Returns a number as a number

// toString()

// {
//     const numbers = 150;
//     const number1 = numbers.toString();
//     const number2 = (125+25).toString();
//     const number3 = (150).toString();

//     console.log(number1);
//     console.log(number2);
//     console.log(number3);

//     console.log(typeof(number1));
//     console.log(typeof(number2));
//     console.log(typeof(number3));
// }

// toExponential()

// toExponential() returns a string, with a number rounded and written using exponential notation

// {
//     let a = 2500000
//     let b = a.toExponential();
//     let c = a.toExponential(2);
//     let d = a.toExponential(3);
//     let e = a.toExponential(4);

//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
//     console.log(e);
// }

// toFixed()

// {
//     let fix1 = 5.6545
//     let fix2 = fix1.toFixed(1);
//     let fix3 = fix1.toFixed(2);
//     let fix4 = fix1.toFixed(3);
//     let fix5 = fix1.toFixed(4);
//     let fix6 = fix1.toFixed(5);
//     let fix7 = fix1.toFixed(6);

//     console.log(fix1);
//     console.log(fix2);
//     console.log(fix3);
//     console.log(fix4);
//     console.log(fix5);
//     console.log(fix6);
//     console.log(fix7);
// }

// toPrecision()pre

// {
//     let pre1 = 5.6545
//     let pre2 = pre1.toPrecision(1);
//     let pre3 = pre1.toPrecision(2);
//     let pre4 = pre1.toPrecision(3);
//     let pre5 = pre1.toPrecision(4);
//     let pre6 = pre1.toPrecision(5);
//     let pre7 = pre1.toPrecision(6);

//     console.log(pre1);
//     console.log(pre2);
//     console.log(pre3);
//     console.log(pre4);
//     console.log(pre5);
//     console.log(pre6);
//     console.log(pre7);
// }

// Valueof()

// {
//     const numbers = 150;
//     const number1 = numbers.valueOf();
//     const number2 = (125+25).valueOf();
//     const number3 = (150).valueOf();

//     console.log(number1);
//     console.log(number2);
//     console.log(number3);

//     console.log(typeof(number1));
//     console.log(typeof(number2));
//     console.log(typeof(number3));

// }


