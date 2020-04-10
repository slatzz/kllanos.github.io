// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
     
    //Create a function that prints the range of given parameters
    
    //Create an array to hold the output
    
    var rangeArray = [];
    
    /* Use a nested while loop in an if/else if statement to check for the
     * given starting and ending values
     */
    if(start < end) {
        
        while (start <= end)
        
    /* Push the starting values into the new rangeArray if the starting value
     * is less than the ending value
     */
        rangeArray.push(start++);
        
    } else if(start > end) {
        
        while (start >= end)
        
    /* Push the starting values into the new Array if the starting value is 
     * greater than or equal to the ending value
     */
        rangeArray.push(start--);
    }
    
    // Return the new rangeArray
    return rangeArray;
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}