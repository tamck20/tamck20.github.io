
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(length) {
//assign string literal to variable str
let str = "";
  for(let i = 0; i < length; i++) {
      str += "#";
      console.log(str);
    }

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  //create loop run numbers through 1 - 15
  for (let i = 1; i <= 15; i++){
  //if i has remainder of 0 and 5, console.log('fizzbuzz')
    if(i % 3 === 0 && i % 5 === 0){
      console.log("fizzbuzz");
          //if i remainder of 3 is stricly 0, console.log('fizz')
    }else if (i % 3 === 0){
        console.log("fizz");
          //if i remainder of 5 is strictly 0, console.log('buzz')
    }else if (i % 5 === 0){
        console.log("buzz");
    }else { // all other numbers, print itself
        console.log(i);
      }
  }

}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
//declare size and empty 'board' string
let board = "";
//create outter loop for rows
for (let i = 1; i <= size; i++){
    //inner loop for columns
    for (let m = 1; m <= size; m++){
        //if the column is even
      if((i + m) % 2 === 0){
          board += " ";
            //if the column is odd
        }else{
          board += "#";
        }
    }
    board += "\n"; // break to next line
}
console.log(board);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
