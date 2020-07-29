
///////// SYNTAX /////////

/* The order in which the computer executes its code. We can create conditional statemetns and loops to help the computer to execute what we want.
A conditional statement is a set of commands that executes if a specified condition is true.

-Conditional Statements
  **IF**:

  if (condition){
      execute code block
  }
  -**ELSE IF**
  else if (condition){
      block of code runs
  }
  -**ELSE**
  
  else{
      if prior coditions not met, this block of code runs
  }

  **SWITCH**

  switch(expression){
    case a;
        //code block
        break;
    case b;
        //code block
        break;
    default;
        //code block
  }
*/

/*
NOTE: 
-There can only be one if statement
-There can be unlimited else if statements, but only one will return true
-There can only be one else statement

-Switch Syntax 
-switch: followed by (), evaluates expression in parenthesis.
-The value of the expression is compared against the case statements, if a match,
code will be executed;

-case: differnt expressions which switch word is compared to. 
You can have unlimited switch cases

-break: breaks out of the switch block and stop the execution of testing each case;
once break is removed, the next code block in switch statement (case) is executed

default: if there is no cases that match, it will return a default output

*/
// if Statements
//We are telling the computer that if this statement is true, console.log()
if (1 === 1){
    console.log("Congratulations");
}

//But if its not true, I want to run something else...
//We can add if else statements to add additional arguments to print something else

let weather = "Sunny";
if (weather === "Cloudy"){
    console.log("Where is the sun?");
} else if (weather === "Rainy"){
    console.log("Stay inside!");
} else if (weather === "Sunny"){
    console.log("Let's go outside!");
}
//In the above example we tell our code to go through each condition, and if it is not true, proceed to the next until it is true
//Lasty, if the condition is false, use the else statement

weather = "Snowy";
if (weather === "Cloudy"){
    console.log("Where is the sun?")
} else if (weather === "Rainy"){
    console.log("Stay inside!");
} else if (weather === "Sunny"){
    console.log("Let's go outside!");
} else {
    console.log("Panic");
}

//A switch statement can replace mulitple if statements
//Switch statements are better for fixed values rather than boolean

let a = 5 + 5;
switch (a) {
  case 5:
    console.log( "Almost there" );
    break;
  case 10:
    console.log( "You got it!" );
    break;
  case 15:
    console.log( "A little too big" );
    break;
  default:
    console.log( "Not even close" );
}
