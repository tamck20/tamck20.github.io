// Data types are types of data that tells the cmoputer how we (the programmer) intend to use the data
/* Some data types include:
Numbers
Strings
Booleans
Arrays
Objects
Functions
undefineds
nulls
NaN
Infinity and -infinity

*/
//Below are examples of each

//Numbers
/*
-Numbers or intergers like 1, 2, 3, 4, 5
-can be written with or without decimals
-numbers can be negative as well
*/
var myNum = 17 //initialize x to a number (5)
console.log(myNum); // prints variable which is 17

//Strings

/*
A string can be made up of letters, numerical values and also spaces between quotations

"This is a string"

-Strings are formed by using single ' ' or double " " quotes

-You cannot use a variation of both single and double within the same string

-strings can be added together (concatenated)

-you can make numbers and boolean statements a string as well but will be identified as a string datatype

-to access certain characters within a string you can index the string 

-strings are zero indexed, so each character inside a string has its own index

-you can find the length of a string using .length property

*/

var firstName = "Tommy" // intializing variable firstName into a string of my first name 

var lastName = "McKiernan" //intializing variable firstName into a string of my last name

//Booleans 
/*
Booleans are statements referring to whether the code inputted is true or false

*/
var isJetsFan = true
var isSaintsFan = false
console.log(isJetsFan); // which will return true
console.log(isSaintsFan); // which will return false

//another example using numbers

var myBool = 1 === 1 // created variable saying 1 is equal to 1

console.log(myBool) // this will return true

var myBool2 = 1 === 3 //  1 equals 3

console.log(myBool2) // will return the value false because 1 does not equal 3

/*
An Array is a collection surrounded by Brackets [], which store data at indices 

It can store strings, numbers, booleans, and other complex data as well. Arrays are essecntially obejcts in disguise

We tend to use arrays if values need to be identified by a number, and if data represents a collection of many things

*/

var array = [] // create an empty array literal 

/*
We can access information in arrays using bracket notation
We can add to existing arrays, remove elements of exisitng arrays and so on 
*/

var things = ["string", 12, true]; //create a new array in which we will push into existing
array.push(things); // push things into array
//console.log(array); // console log array

//lets add to the array
things[3] = "Pizza" // using bracket notation, add a fourth value
//console.log(array); // print newly formatted array
//now lets remove the value at [0] using the shift method

things.shift();

//console.log will now return 12, true, pizza
//There are many other methods to access different information but not limited to..
/*
pop()
unshift()
push()
.length
*/

/*
Objects:
Obejcts describe an object in which has data stored in key:value pairs using curly braces {}

A key value pair is known as a property and the key is a string followed by any type of value
*/
// we use objects if, 1. values need to be identified by a word ("string")
// we use objects if, data collectively represents an independent thing
//example

var objMe = { // we created our new object
    name: "Tommy McKiernan", // added a key name to string 
    age: 23, // added another key value pair, key age, value 23
    location: "New Jersey",
    hobbies: ["Exercising, Coding"]

};

//how we access information in objects, we can use dot notation or bracket notation
//to return a selected key in bracket notation
//console.log(objMe['age']) //returns us 23
//using dot notation to return value of key
//console.log(objMe.age) // returns us 23
//We could again push new key value pairs to existing obejcts like such
objMe.favColor = 'Red';

//Also can add a value to a key like such
objMe.hobbies.push("Running");
console.log(objMe); // returns a newly formatted object with additional key value pair

/*
Functions

Functions are resuable blocks of code that accept inputs, process those inputs, and returns a new data value 
1. Name of function
2. Parameter(s) (Dont take parameters all the time)
3. Function body (Where the code runs)
4. Return statement

Inputs: What datatypes are being passed into this function
Outputs: What should this function return
Constraints: Any specifics in the instructions that involve how I build this function?
Edge Cases: What conditions do I have to meet to make sure I am offereing the proper output?
*/
//example of simple fucntion 
function add(num1, num2){ // creating a function with parameters num1 and num2
    return num1 + num2; // we will return the sum of the two parameters
}
add(10,5); // Then call the function with given arguments and will return 15


//Undefined is a result of a value not assigned to a certain variable
var x; //here we declare a variable but we dont assign any value to it
console.log(x); // if we try and console log, it will return "undefined"

//Null value is on purpose where it holds no value whatsoever
let z = null; //we dont want z to have a value, assign it to null
console.log(z);//prints back null

/*
NaN (Not a Number)
Is a function
It usually is returned when math operations cannot be performed
isNaN requires a value in which to be tested
*/

isNaN("Hello"); 
//will return a boolean value back saying true because the string hello is indeed not a number
0/0 
// prints NaN
isNaN(23)
//prints false

/*
Infinity and -Infinity
They simply represent a value that is positive infininty and negative infinity*/
Infinity + Infinity // prints Infinity
-1/0 // prints -Infinity

/*
Primitive/Simple Data types include: Numbers, strings, booleans, NaN, 
-They are simple because they are atomic(only a singular value), immutable: they do not hold, collect or aggregate other values,
and operations on simple values return new simple values, they do not alter the original value
-Copy by value when assigning or passing simple datatypes are copied from one variable to the next
-Variable can hold the actual values of primitive types
-FIXED size


Complex data types
-Objects, Arrays, Functions
-They are complex because the values aggregate other values and therefor are of INDEFINITE size
-Copy by reference - when assigning or passing, complex data types are passed by reference
-Variables can only hol references to values of complex types
*/

//Copy by Value
var name = "Tommy";
//Copy by Reference
var myCar = {};
function myCarMake(manufacturer){
    manufacturer.brand = "Nissan"
};
myCarMake(myCar);
console.log(myCar) // prints {brand: "Nissan"}
