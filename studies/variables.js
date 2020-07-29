
/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our

 * variable.

 *

 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).

 */


// 1. declaration //
var myName;
/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined


// 2. initialization or assignment //
myName = 'Tommy';
console.log(myName); // prints => Tommy

// 3. re-assignment //
myName = 'Thomas';
console.log(myName); // prints => Thomas

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //

var myVariable = 1;
var myVariable = true;
myVariable = "Pizza";

// var allows us to declare a variable globally scoped or functionally scooped
var myNumber = 17;

if (myNumber === 17) {
  var x = 5;
  console.log(x); //prints 5
}

console.log(x); // prints 5

// Similar to var, let allows you to declare variables limited to the scope of a block statement (functionally)
var y = 1;

if (y === 1){
    let y = 2; //reassigning the value to 2, if the condition passes
    console.log(y); // prints 2
}

// if we console log outside of the block statement
console.log(x); // prints 1

// Similar to the let declaration, const is block-scoped but it cannot be changed during reassignment or redeclared
//const planet = "Earth";

//if you try and redeclare using var or let, it will return an error
const planet = "Mars";

//const planet = "Neptune"; //Return error saying planet is already defined
console.log(planet); 

//values can still be pushed inside objects and arrays but can not reassign an object or array to a new value

//Hoisting is JavaScripts behaviour of moving declarations to the top of the code using VAR, not let or const

function hoist() {
  a = 20;
  var b = 100;
}
hoist();

console.log(a); //Accessible as a global variable outside hoist() function, output: 20
//console.log(b); //Since it was declared, it is confined to the hoist() function scope. We can't print it out outside the function.
