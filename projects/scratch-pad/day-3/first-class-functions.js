// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    // Create an input value to test is greater than the given base value.
    
    // Create a function to test if the input value is greater than the base value.
       
       var greaterThanBase  = function (i) {
           
           return i > base;
       }
   
    return greaterThanBase;
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
     // Create an input value to test is less than the given base value.
    
    // Create a function to test if the input value is less than the base value.
    
    var lessThanBase  = function (i) {
           
          return i < base;
      }
   
    return lessThanBase;
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    // Create a function that returns if a given String begins with a given character.
   return function startsWithChar (str) {
    
  
    // Check if startsWith char is the same first character as string (str)
           if (str[0].toUpperCase() == startsWith.toUpperCase()) {
               
               return true;
               
           } else {
               
               return false;
       }
   }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    /* Create a function that will return if a given string ends with a given
     *  character.
     */
   return function endsWithChar (str) {
       
       
       if(str[str.length - 1].toUpperCase() === endsWith.toUpperCase()) {
           
           return true;
       } else {
           
           return false;
       }
   }
  
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    // Return an array of modified strings 
    
    // Create an array to collect the modified strings.
    
    var modStr = [];
    
    for(var i = 0; i < strings.length; i++) {
        
        modStr.push(modify(strings[i]));
    }
    
    return modStr;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    /* Create a function to loop over an Array of Strings and return true if
     * all strings pass.
     */
    
    return strings.every(test);
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}