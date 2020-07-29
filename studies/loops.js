/*
LOOPS
-Allow you to repeatedly run the same code over and over again with a differentvalue
until a condition is met
-This is often done when working with arrays
*/


//There are several types of loops...

/*
For loops
- We use for loops when you know how many times the loop should run
- Allow us to run a code to be executed repeatedly
1. Where should I start (initialize your variable)
2. How long should I loop (Conditional)
3. What changes each time I loop? (Increments)
syntax for (start ; end ; update ){} 
*/

for (var i = 0; i <=5; i++) // start at 0, end at 5, increase by 1 until we hit the end point, or 5 in this case

console.log(i); //Prints 1 - 5

//loop backwards counting down from 10 - 1
for (var i = 10; i >= 1; i--){
console.log(i); //prints from 10 - 1 in the console 
}
//more complex example counting BACKWARDS with array
var numbers = [10,5,3,0];
for (var i = numbers.length-1; i >= 0; i--){
  console.log(numbers[i]); //prints array backwards 0 3 5 10
}
//Counting up towards a limit with array
var num = [1, 2, 3, 4, 5];
//loop until array reaches length of num, count up
for (var i = 0; i < num.length; i++){
  console.log(num[i]); //will print 1-5 to the console.
}
/*
While Loops
- Use when we DO NOT know how many times it will run until a specific condition is met
- Essentially a repeating if statement
*/
var count = 0; //intializing var count with number 0 (starting point)
while (count < 5){ //as long as the number is still less than 5 even after running through loop
console.log(count); //print the number
count++; //increase the previous number printed by increment of 1
}

//Using while loop, add numbers 1-5 to the existing array in descending order
var array = []; //declare an empty array
var x = 5; // starting number at 5
while (x > 0){ //while loop, if x is greater than 0 keep running through loop
  array.push(i); // push number into array
  x--; // decrease x value by 1 until conditiion isn't met
}

/*For In Loops
-Great for using the key:value pairs through the objects
Syntax:
for (var key in object){
  console.log(key);
  console.log(object[key]
Lets loop over an obejct
 */
 var colorObject = { //creating our object defined as colorObject
   one: "Red",
   two: "Green",
   three: "Blue"
 };

 for (var key in colorObject){ //for key in objcet
   console.log(key); //console.log the keys
   console.log(colorObject[key]); // then console.log the values
 }

//Looping over objects in reverse
let colorArray = []; //creating empty array in which we can push our object into
for (let key in colorObject){
  colorArray.push(colorObject[key]);
}
for (let t = colorArray.length-1; t >= 0; i--){ //run for loop giving conditions to print our newly pushed array into reverse order
  console.log(colorArray[t]);
}