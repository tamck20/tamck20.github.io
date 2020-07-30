/*
WHAT IS SCOPING?
-The scope of a variable(where it can be accessed) is controlled by the location of the variable declaration.
-Scope determines the accessibility (visibility) of variables.
*/

//WHAT ARE THE DIFFERENT SCOPES IN JAVASCRIPT?
//-There are three types of scopes
   /* -Global
        -There is only one global scope throughout a document of code
        -A variable is in a glbal scope if it is defined outside of a function
        -You can also access and alter any variable declared in a global scope from any other scope
        -Var is the only variable bound to Global scopes
    */
    
var color = "Red" //global variable
function randomFunction(){
    //the variable color can be used inside of this function since it is global scoped
};

   /* -Local
        -Variables declared within a function are in the local scope.
        -Local scope is also called function scope because local scope is created by functions in Javascript. 
        -Variables in the local scope are only accessible within the function in which they are defined
        -Var is bound to Local scoped
    */
    //outside of the function CANNOT use carName variable
function anotherRandomFunction() {
  var carName = "Ferrari";
  //code inside of this function can access variable beacuse it is local scoped
};

    /* Block
        -The area within if statements, switch conditions or loops
        -A good way of interpreting is the block scope is within {}
        -const and let are bound to block scope, meaning,
        these variables only exist within the block
    */
function random(){
    if(true){
        //we are within the block scope
        var breakfast = "eggs" //exists in function scope
        let lunch = "fruit"; //exists in block scope
        const dinner = "meat" //exists in block scope
    }
}
/*In the instance of a globally scoped variable having the same name as a function parameter,
the function will only reference the value that was passed as a parameter. Parameters will be used.
The reason why is called Variable Shadowing and that is when it searches for the variable at the innermost scope 
being executed at the time, and continues until the first match is found, 
even if there are other variables with the same name in the outer scope.
*/
