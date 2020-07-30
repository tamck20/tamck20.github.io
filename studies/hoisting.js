/* WHAT IS HOISTING

-Hoisting is the JavaScript interpreter's action of moving all variable and function declarations to the top of the current scope. 
-However, only the actual declarations are hoisted. Any assignments are left where they are.
-A variable can be defined after it has been used
-var can be hoisted to the top of the script (line 0) or the top of a function
-let and const are hoisted but are not accessible until interpreter reaches the line. 
-Essentially let and const are NOT hoisted 
-Initializations CANNOT be hoisted
-Happens before code execution
-Function and var declarations are hoisted to the top of scope
-Function declarations hold precedence over var
*/

var a = "one";//declare variable a. initialize string 'one' to a
var b = "two";//initialize string 'two' to b
var c = "three";//initialize string 'three' to c
d = "fourth" //value of d but not declared
console.log(d); // will output "fourth", value was defined with var
var d; //this declaration will be hoisted to the top to look for anything declared d and take its value
// the JavaScript interpreter looks ahead to find all the variable declarations and hoists them to the top of the script or functoin

// We create a function hoist() and we assign "blue" to color
function hoist(){
    color = "blue";
//declare color variable which is hoisted to the top of the function
    var color;
    console.log(color); //prints "blue" 
}
hoist(); //prints blue

//Function Declaration
//A function declaration is hosited
//calling a function before it is defined
console.log(doSomething);
doSomething();

function doSomething(){
    console.log("Declare Something");
}

//Function Expression
//Will not be hoisted, instead the variable itself will be hoisted
//Will print as undefined
//First class function because it can be passed around
console.log(something);
something();

var something = function(){
    console.log("Express something");
};

/*
JS INTERPRETER
-A program that converts high level source code to low-level machine code
-Hoisting happens before each execution
-Makes two passes over code
    1. Scans code and hoists variable and function declaration
    2. Executes hoisted code
*/

