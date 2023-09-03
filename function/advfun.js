// Javascript function apply()

// 1. apply() Method to call a function

// {
//     // object definition
//     const personName = {
//         firstName: "David",
//         lastName: "johnson",
//     };

//     // function definition
//     function greet(wish,message){
//         return `${this.firstName},${wish}.${message}`;
//     }

//     // calling greet() function by passing two arguments
//     let result  = greet.apply(personName,["Good morning","How are you"]);

//     console.log(result);
// }

// 2. apply() for function Borrowing

// {
//     // object definition
//     const car  = {
//         name: "Audi",
//         description() {
//             return `The ${this.name} is of ${this.color}.`;
//         },
//     };

//     // object definition
//     const bike = {
//         name: "Duke",
//         color: "black",
//     };

//     // bike is borrowing description() method from car using apply()

//     let result = car.description.apply(bike);

//     console.log(result);
// }

// 3. apply() to Append two Arrays

// {
//     let color1 = ["Red", "Green","Blue"];
//     let color2 = ["yellow","Black"];

//     // appending two arrays color1 and color2
//     let y = color1.push.apply(color1,color2);

//     console.log(color1);
// }

// 4. Using apply() with built-in functions

// {  
//         const numbers = [6,1,7,3,6,7];
    
//         // using apply() with Math object

//           let max = Math.max.apply(null,numbers);
//           console.log(max);

//     // without using apply() with math object

//     let max1 = Math.max(7,8,3,9,2);
      
//     console.log(max1);
// }

// {
//      function sum(){
//         let sum = 0;
//         for(let i=0;i<arguments.length;i++){
//         sum += arguments[i];
//     }
//     return sum;
// }
//      const result = sum.apply(null,[4,5,6]);

//      console.log(result);
// } 
