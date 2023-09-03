// Javascript Object 

//   The Object type represents one of JavaScript's data types. It is used to store various keyed        collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.

// Here is an example of a JavaScript object.

// object

// {
//     const student = {
//         firstName: 'ram',
//         class: 10
//     };
// }

// JavaScript Object Declaration

// {
//     const object_name = {
//         key1: value1,
//         key2: value2
//     };
// }

// object creation

// {
//     const person = { 
//         name: 'John',
//         age: 20
//     };
//     console.log(typeof person); 
// }

// JavaScript Object Properties
// In JavaScript, "key: value" pairs are called properties. For example:-

// {
//     let person = { 
//         name: 'John',
//         age: 20
//     };
//     // Here, name: 'John' and age: 20 are properties.
// }

// Accessing Object Properties

// 1. Using dot Notation

// Here's the syntax of the dot notation.

// {
//     objectName.key
// }

// For example:-

// {
//     const person = { 
//         name: 'John', 
//         age: 20, 
//     };
    
//     // accessing property
//     console.log(person.name); 
// }

// 2. Using bracket Notation

// Here is the syntax of the bracket notation.

// {
//     objectName["propertyName"]
// }

// For example,

// {
//     const person = { 
//         name: 'John', 
//         age: 20, 
//     };
    
//     // accessing property
//     console.log(person["name"]); 
// }


// JavaScript Nested Objects

// An object can also contain another object. For example,

// {
//      // nested object
//      const student = { 
//      name: 'John', 
//      age: 20,
//      marks: {
//          science: 70,
//          math: 75
//      }
//      }

//      //accessing property of student object
//      console.log(student.marks); 

//     // accessing property of marks object
//      console.log(student.marks.math);
// }


// Javascript object method

// 1. Javascript Object.assign()

// assign() Parameters

// The assign() method takes in:

// target - the target object to which we will copy all the sources.
// sources - the source object(s) whose properties we want to copy.

// {
//     const obj1 = {a:1};
//     const obj2 = {b:2};
//     const obj3 = {c:3};

//     // combine all the properties of
//     // obj1, obj2, obj3 into a single object

//     const mergedObj = Object.assign(obj2, obj1, obj3);

//     console.log(mergedObj);
// }

// assign Return value

// Javascript Object.assign() to Clone Objects

// {
//     // create source object

//     const obj = {
//         name: "Tom adam",
//         age:27,
//     };

//     // create target object

//     let newObject = {};

//     // copy enumerable properties of obj to newObject
//     // newObject is returned and stored in copy object

//     const copy = Object.assign(newObject,obj);

//     // print the copy object

//     console.log(copy);

//     // print newObject

//     console.log(newObject);
// }

// In the above example,we have used the asssign() method to assign the contents of obj to newObject.

// 2. Javascript Object.create()

// {
//     let student = {
//         name: "maria",
//         age:25,
//         marks:87.7,
//         display(){
//             console.log("Name:",this.name);
//         }
//     };

//     // create object from Student prototype
//     let std1 = Object.create(student);
//     std1.name = "jack";
//     std1.display();
// }

// 3. Javascript Object.entries

// {
//     const obj = { name: "jay", age: 34, location: "bhuj"};

//     // returns properties in key-value format

//     console.log(Object.entries(obj));
// }

// {
//     // keys are arranged randomly

//     const obj = { 65: "x", 22: "y", 77: "z"};

//     // returns key-value pairs arranged 
//     // in ascending order of keys

//     console.log(Object.entries(obj));
// }

// entries() to Iterate key-Value pairs

// {
//     const obj = { name: "jay", age: 34, location: "bhuj"};

//     // iterate through key-value pairs of object

//     for(const [key,value] of Object.entries(obj)){
//         console.log(`${key}: ${value}`);
//     }
// }

// 4. Javascript Object.is()

// {
//     // The Object.is() mathod checks if two values are the same.

//     let obj1 = {a:1,b:2};

//     // comparing the object with itself

//     console.log(Object.is(obj1, obj1));
// }

// {
//     // Javascript Object.is()

//     // objects with same values
//        console.log(Object.is("Javascript","Javascript"));
    
//     // objects with different values
//     console.log(Object.is("Javascript","javascript"));
    
//     // compare null values
//     console.log(Object.is(null,null));
// }

// {

// // is() with Custom Objects

// // create an object
// let obj1 = { a: 1};

// // create another object
// // with identical properties as obj1
// let obj2 = { a: 1};

// // returns true because both arguments
// // have the same reference
// console.log(Object.is(obj1, obj1));

// // returns false because obj1 and
// // obj2 have different references
// console.log(Object.is(obj1, obj2));

// }

// {
//     // is() with special Cases

//     // special Cases

//     console.log(Object.is({},{}));

//     console.log(Object.is(3, -3));

//     console.log(Object.is(-7,-7));

//     console.log(Object.is(NaN, 0/0));
// }

// 5. Javascript Object.hasOwnproperty()

// The Object.hasOwnProperty() method checks if the object possesses the given property.

// {
//     const obj = {};
//     obj.id = 42;
//     console.log(obj);

//     // check if id is present in obj or not
//     console.log(obj.hasOwnproperty("id"));
// }

// {
//     // Javascript Object.hasOwnProperty()

//     // create an object with Property id
//     const obj = {id: 33, toString : 23};

//     // check if exists in obj
//     console.log(obj.hasOwnProperty("id"));

//     // check if name exists in obj
//     console.log(obj.hasOwnProperty("name"));

//     // inherited properties return false
//     console.log(obj.hasOwnProperty("tostring"));
    
// }

// 6. Javascript Object.freeze()

// {
//     // The object.freeze an object i.e. it prevents the object from being modified.

//     let obj = {
//         foo: "day",
//         new_foo: "one"
//     };

//     // freeze the obj object
//     let o = Object.freeze(obj);
//     let p = Object.freeze(obj);

//     // changes will fail silently
//     obj.foo = "day1";
//     console.log(obj.foo);

//     // cannot add a new property
//     obj.new_foo = "day";
//     console.log(obj.new_foo);
// }

// 7. javascript Object.getOwnpropertyNames()

// {
//     // The Object.getOwnPropertyNames() method returns an array of all the properties found.

//     const obj = {
//         name: 'Zara',
//         age: 32,
//         address: 'oldstreet',
//     };

//     // Find out the properties present in obj
//     const PropertyNames = Object.getOwnPropertyNames(obj);

//     console.log(PropertyNames);
// }

// 8. Javascript Object.setPrototypeof()

// {
//     // The Object.setPrototypeOf() method sets the prototype of the specified object to another object or null.

//     // create an empty object
//     const obj = {};

//     // create a non-empty object parent
//     const parent = { foo: `bar`};

//     // set parent as the prototype of obj
//     Object.setPrototypeOf(obj,parent);
    
//     // print foo property of obj
//     // using the obj object
//     console.log(obj.foo);
// }

// 9. Javascript Object.tostring()

// {
//     // The Object.tostring() method returns the given object as a string.

//     // create a number with value 10.
//     let num = 10;

//     // check the type of num before
//     // using the tostring() method
//     console.log(typeof num);

//     // check the type of num after
//     // using the tostring() method
//     console.log(typeof num.toString());
// }

// 10. Javascript Object.valueOf()

// {
// // The Object.valueOf() method returns the primitive value of the specified object.

// // create a new number object with value of 12
// let num = new Number(12);

// console.log(num);

// console.log(num.valueOf());

// }

// 11. Javascript Object.values()

// {
//     //  The Object.values() method returns as array containing the enumerable values of an object.

//     // array-like object having integers as key
//     const obj = { 33: "A", 44: "B", 55: "C"};

//     // print the enumerable values of obj
//     console.log(Object.values(obj));
// }

// {
//     // values() with object having random key ordering

//     // object with random key ordering
//     const obj1 = { 76: "a", 21: "b", 89: "c"};

//     // print the enumerable values of obj1
//     console.log(Object.values(obj1));
// }

// {
//     // Javascript object.values() with string

//     const string = "decode";
//     console.log(Object.values(string));

//     // values() with string returns an array of character
// }