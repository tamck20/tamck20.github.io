
/* The good thing about javascript is that we can access strings using built-in methods, 
like finding the length of a string, joining or splitting strings, replacing characters and so much more */
/*

STRING MANIPULATION
-you can maipulate strings with operators and string methoda

-Operators
    - Concatenation operator (+)
    -adds two seperate strings together

-String Methods
    -JS has built-in methods to act on our strings

*/
//When we joiningg strings we use the + operator to add strings and/or spaces or punctuation
var firstName = "Tommy";
var lastName = "McKiernan";
console.log(firstName + " " + lastName); // prints first name separated with a space then last name
// alternate way of concatenating strings using shorthand assignment operators

var str = "";
str += "Say hello "; // prints Say hello
str += 5; // prints Say hello 5
str += " times fast"; // prints Say hello 5 times fast


///////STRING METHODS///////
//.slice() Method
//extracts a part of a string and returns the extracted part in a new string.
//The method takes 2 parameters: the start position, and the end position (end not included)

var misc = "Dog, fruit, car";
var splice = misc.slice(5, 10); 
console.log(splice);// prints fruit

//.indexOf() - return index position of a string
let fruit = 'apple';
console.log(fruit.indexOf("l")); // prints 3, because l appears at the 3rd index
//.toLowerCase()
//alters string to revert to lowercase
let string = "Hamburger"
console.log(string.toLowerCase()); //expected output "hamburger"

//.toUpperCase()
//changes string to all uppercase
console.log(string.toUpperCase());

// Concat method
//Joins specified strings together
var string1 = "New Orleans, ";
var string2 = "Louisiana";
var string3 = string1.concat(string2);
console.log(string3); // prints New Orleans, Louisiana
//replace()
//searches a string for a specified value, or regexp,
//and returns a new string where the specified values are replaced
var greeting = 'Hello my people!';
console.log(greeting.replace("people", "friends"));
