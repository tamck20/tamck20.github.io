/*
The two phases of using functions
declaring a function and calling a function

*/
//Other than executing a function, we can CALL or INVOKE it

//Parameters are variables defined by the function that receives a value when the function is called

//Arguments are the data passed at the time of calling a function
//when you call or invoke a function, 
//you call it by its name entering in arguments which represent the parameters
//Named function syntax

function named(parameter1, parameter2){
   let sum = parameter1 + parameter2;
    return sum;
}
named(2,5); //invoking function gives us output of 7

/*
//Assigning a variable to a function 
//AKA Function Expression
var myFunction = function(parameter){

    code
}
*/
//Function Expression Example

var sum = function(x, y){

    return x + y;
};

//calling function

sum(2, 3);

//prints 5


/* Scoped 

-Variables declared inside a function do not work outside the functions because it does not exist outside

-When a variable is globally declared (declared outside the function) it will return the value*/

function myFunc(){

    var y = 2;

}

//console.log(y); //expected output: ERROR y is not DEFINED 

//If you want to use a variable outside of a function, declare it ouside of the function first
// A closure is a function having access to the parent scope, even after the parent function has closed

/*
In this example, we have defined a function makeAdd(m), 
that takes a single argument m, and returns a new function. 
The function it returns takes a single argument y, and returns the sum of m and y.
*/
function makeAdd(m) {
  return function(y) {
    return m + y;
  };
}

var add5 = makeAdd(5);
var add10 = makeAdd(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12

/*add5 and add10 are both closures. They share the same function body definition, but store differnt lexical environments,
 meaning in add5's lexical environment, m = 5, while in add10, m = 10
 */
