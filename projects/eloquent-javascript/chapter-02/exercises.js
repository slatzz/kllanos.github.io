
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(number) {

// Create a for loop and use "#" as our starting and incremental conditions
for(var i = "#"; i.length <= number; i += "#")

// Log the result to the console
console.log(i);

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*Create and return a function that returns the numbers 1 - 15 but returns 
 * "fizz" for multiples of 3, "buzz" for multiples of 5, and
 *  "fizzbuzz" for multiples of both.
 */
 
function fizzBuzz(start, end) {
  
  // Create a for loop 
  for (var i = 1; i <= 15; i++) {
    
    // Use a conditional statement to check for multiples of 3 and 5
    if (i%3 == 0 && i%5 == 0) {
      
      // Log "fizzbuzz" to the console 
      console.log("fizzbuzz");
      
      // Log "fizz" to the console while 'i' is a multiple of 3
    } else if(i%3 == 0) {
      console.log("fizz");
      
      // Log "buzz" to the console while 'i' is a multiple of 5
    } else if(i%5 == 0) {
      console.log("buzz");
    } else {
      
      // Log 'i' all other times
      console.log(i);
     }
   } // Return the results
    return fizzBuzz;
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(number) {

// Create a variable and assign it an empty space
var chessBoard = "";

// Create an outer for loop
for (var y = 0; y < number; y++) {
  
  // Create an inner for loop with another variable
  for (var x = 0; x < number; x++) {
    
    // Log an empty space to the console while x + y are 
    // multiples of 2
    if ((x + y) % 2 == 0) {
      chessBoard += " ";
    } else {
      // Log "#" when x + y is not even
      chessBoard += "#";
    }
  } // Create a newline 
  chessBoard += "\n";
}
 // Log chessboard to the console
 console.log(chessBoard);
 
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
