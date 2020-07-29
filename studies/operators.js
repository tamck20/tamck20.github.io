/*
Operators are used to assign values, compare values, and perform mathematical problems.
Not only can we compare numbers but we can also do string comparisons

Types of Operators:
Assignment
Arithmetic
Comparison
Logical
Unary
Ternary
*/


//Assignment Operators are used to assign variables 

// =
// assigning 5 to x
let x = 5;
console.log(x);

// += Addition Assignment
let a = 6; //intializing a to 1
a += 3; //a + 3 = 9
console.log(a); //return a = 9

// -= Subraction Assignment
a -= 3; 
console.log(a); // prints 3

// *= Multiplication Assignment
a *= 2;
console.log(a); // prints 12

// /= Division Assignment
a /= 2;
console.log(a); // prints 3

// %= Remainder Assignment
// Divides a value by the right operand and prints the remainder to the variable
a %= 4;
console.log(a); // prints 2

//Arithmetic Operators
//They take numerical values and return the value
//Use + to combine strings as well
// +, -, *, /, %, 

var c = "Hi";
var d = "Tommy ";
console.log(c + d); // returns "Hi Tommy"

/* Logical Operators
|| OR - Which finds the first truthy value
$$ AND - Meets both requirements or finds first false value
! NOT - Returns true for false statements, and false for true statements
*/
//The OR logical operator inside a conditional statement
let num = 10;
if (num > 15 || num < 15){// if one of these accepts, return boolean true
console.log(true);
//if none of these conditions are met, print false
} else{
  console.log(false);
}

//The && operator inside a conditional statement
if (num > 5 && num < 15){// if both conditions are met, return boolean true
console.log(true);
//if none of these conditions are met, print false
} else{
  console.log(false);
}
// The ! operator
let num1 = 1;
let num2 = 2;
//compare the two values using the NOT EQUAL ! operator
console.log(!(num1 === num2)); //returns true

/* Comparison Operators 
== equal to
=== strictly equal (type and value)
!= not equal
!== strictly not equal (type and value)
> greater than
< less than
>= greater than or equal to
<= less than or equal to
*/

//Given that x = 5 up top^

// ==
x == 3; // returns false
x == 5; // returns true
x == "5"; // returns true
// ===
x === 5; // returns true because it strictly equals the type 
x === "5"; // returns false because it does not equal the type 

// != 
x != 3; // returns true because 5 does not equal 3
// >
x > 3; //true
// < 
x < 10; //true
// >= 
x >= 10; // true
// <=
x <= 2; // false

// Unary Operators are operations with only one operand

//typeof will return a string of the values type
typeof 'hello'; // returns string
typeof 55; // returns number
typeof true; // returns boolean

//! bang operator will go before the operator and negate the value

!false; //returns its boolean value then nageates 
!0 //prints true
//- Tries to turn operand into number then negates
console.log(-"55"); // returns number -55
//+ Tries to turn operand into number 
console.log(+'55'); // returns number 55
/*Ternary Operators (conditional) takes three operands
- A condition followed by a question mark
- Then an expression to execute if the condition is truthy then :
- Finally, an expression that makes it false 
*/
let age = 25;
let oldEnoughToGetIn = (age >= 21)? "Yes": "No"; 
console.log(oldEnoughToGetIn);
let p = 5;
let j = 3;
var h = p > j ? p : j;
var f = p < j ? j : p;
console.log(h); // returns 5
console.log(f); // returns 5

