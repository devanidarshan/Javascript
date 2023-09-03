// JavaScript and JSON

// JSON stands for Javascript Object Notation. JSON is a text-based data format that is used to store and transfer data.

// {
//     // JSON syntax
//     {
//         "name": "John",
//         "age": 22,
//         "gender": "male",
//     }
// }

// {
//     JSON data
//     "name": "John"
// }

// {
//     JSON object
//     { "name": "John", "age": 22 }
// }

// JSON Array

// JSON array is written inside square brackets [ ].

// {
//     // JSON array
//     [ "apple", "mango", "banana"]

//     // JSON array containing objects
//     [
//         { "name": "John", "age": 22 },
//         { "name": "Peter", "age": 20 }.
//         { "name": "Mark", "age": 23 }
//     ]
// }

// Accessing JSON Data

// You can access JSON data using the dot notation.

// {
//     // JSON object

//     const data = {
//         "name": "heel",
//         "age": 25,
//         "hobby": {
//         "travelling" : true,
//         "singing" : false,
//         "sport" : "soker"
//         },
//         "class" : ["JavaScript", "HTML", "CSS"]
//     }

//     // // accessing JSON object
//     console.log(data.name); // heel
//     console.log(data.hobby); // { singing: false, travelling: true, sport: "soker"}

//     console.log(data.hobby.sport); // soker
//     console.log(data.class[2]); // CSS 
// }

// You can also use square bracket syntax [] to access JSON data. 

// {
//     // JSON object
//     const data = {
//         "name": "heel",
//         "age": 25
//     }

//     // accessing JSON object
//     console.log(data["name"]); // heel
// }

// JavaScript Objects VS JSON

// Converting JSON to JavaScript Object

// You can convert JSON data to a JavaScript object using the built-in JSON.parse() function.

// {
//     // json object
//     const jsonData = '{ "name": "heel", "age": 25 }';

//     // converting to JavaScript object
//     const obj = JSON.parse(jsonData);

//     // accessing the data
//     console.log(obj.age); // 25
// }


// Converting JavaScript Object to JSON

// You can also convert JavaScript objects to JSON format using the JavaScript built-in JSON.stringify() function. 

// {
//     // JavaScript object
//     const jsonData = { name: "heel", age: 25 };

//     // converting to JSON
//     const obj = JSON.stringify(jsonData);

//     // accessing the data
//     console.log(obj);
// }

