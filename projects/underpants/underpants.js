// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value) {
    
    return value;
    
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/


// Assign a function declaration to _.typeOf
_.typeOf = function(value){

/**
 * Input: A value
 * Output: The type of datatype as a string
 * Constraints: N/A
 * Edge cases: Array and null are Object datatypes
 */

   // Create a variable and assign it to the typeof function    
   let result = typeof(value);
  
   // Use a conditional statement to compare value with edge cases
   if(result == 'object') {
       
       if(Array.isArray(value)) {
           
           let result = 'array';
           
           return result;
       }
       
       if(value === null) {
           
           let result = 'null';
           
           return result;
       }
   }
  // Return the result
  return result;
  
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first 
*       element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

// Assign a variable to function declaration to _.first
_.first = function(array, number) {
    
/**
 * I: Array and number
 * O: Return an array literal if the array is not an array. If number is not
 *      given or NaN, return first element of the array. 
 * C: N/A
 * E: Negative integers?
 *    Numbers greater than length of array?
 */
 
// Use a conditional statement to check if the array is an Array    
    // If not an array, return an array literal
// Use conditional statement to check if number argument is negative
    // Return empty array if number is negative
// Create a variable called results and assign it to an array literal
// Loop with the stopping condition as the number parameter
    // Push results at given index into new array
    // Return results array
    
    
// Use a conditional statement to check if the array is an Array or if the
    // number is negative.
    if(!Array.isArray(array) || number <= 0) {
    // If not an array, return an array literal
        return [];
    }
    
    let results = [];
    // Loop with the stopping condition as the number parameter
        for(let i = 0; i < number && i < array.length; i++) {
            
            results.push(array[i]);
        } 
        
        // Return nothing if the number is not give or NaN
        if(results.length == 0) {
            
            results = array[0];
        }
        
    // Return the results
    return results;
};







/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element 
*       in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

// Create a function called _.last with the parameters of an array & number
_.last = function (array, number) {
 
/** 
 * I: An array and a number
 * O: If array is not an array, return an array literal. If the number is not
 *    a given  number or not a number datatype, return the last element of the
 *    array. In all other events, return the last element of array.
 * C: N/A
 * E: Negative integers?
 *    Numbers greater than the length of the array?
 */
    
    // Check if the array is an array datatype or if the number is negative
    // If neither of these is true, return an array literal.
    // Create an array literal to push the output value into
    // Loop backwards through the array value and push results into new array
    // Check if number is greater than the length of the array
    // Return results array
    
    // Check if the array is an array datatype or if the number is negative
    if(!Array.isArray(array) || number <= 0) {
    // If not an array, return an array literal
        return [];
    }
    // Create an array literal to push the output value into
    let results = [];
    
    // Declare 'i' as variable
    let i;
        
        // Assign 'i' based on array length
        if(number > array.length) {
           
            i = 0;
            
        } else {
            
            i = array.length - number;
        }
    
    // Loop with the stopping condition as the number parameter
        for(i; i < array.length; i++) {
            
            results.push(array[i]);
            
        }
        
        if(isNaN(number)) {
            results = array[array.length - 1];
        }
     // Return the results   
    return results;
    
};

// Create a function called _.indexOf and assign it the parameters of array & value
_.indexOf = function(array, value) {
/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

/**
 * I: An array and a value
 * O: Return the index at which value first occurs. Return -1 if value is not 
 *    in the array. 
 * C: Do not use the indexOf method
 * E: Multiple occurances of value?
 *    Value not in array?
 */
 
 // Loop through array to return index of first occurance of value
    // Check for multiple occurances with if statement and strictly compare values
 // Conditional statement to return -1 if value is not in array
 
  // Loop through array to return index of first occurance of value
 for(let i = 0; i < array.length; i++) {
     
     // Return only the first occurance of the value's index
     if(array[i] === value) {
         
         return i;
        
        }
    }
    // Return -1 if the value is not found in the array
    return -1;
    
};
     
 
// Create a function called _.contains and assign an array & value as parameters
 _.contains = function(array, value) {

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

/** 
 * I: An array and a value
 * O: Return boolean of true if array contains the input value.
 *    Return false if the array does NOT contain the input value.
 * C: Must use a ternary operator 
 * E: Did we strictly compare values?
 *    Value is not given?
 */
 

 // Use ternary operators to check if an input value appears in a given array
 // Return true if the value is in the Array
 // Return false if the value is not in the Array
 // Return nothing if there is no value to compare
     
     // Use a ternary operator to return if the value is in the array
     return array.includes(value) ? true : false;
    
};



/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

// Create a function called _.each that takes a collection and action as parameters
_.each = function(collection, action) {
    
    // Check if the collection is an array
    if(Array.isArray(collection)) {
        
        // Loop through the array with a for loop if an array
        for(var i = 0; i < collection.length; i++) {
            
            // Call function for each of the array's elements
            action(collection[i], i, collection);
        }
        
    } else {
        // Use a for in loop if collection is an object
        for (var key in collection) {
            
            // Call function for each of the object's properties
            action(collection[key], key, collection);
        }
    }
};


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

/**
 * I: An array
 * O: A new array with all duplicates removed
 * C: Use _.indexOf()
 * E: N/A
 * 
 * 
 */ 
 
// Create a function called _.unique that takes an array as a parameter
_.unique = function(array) {
     var newArray = [];
    
    // Loop through the Array using a for loop.
    for(var i = 0; i < array.length; i++) {
        
        /* Using a conditional statement and .index() method access the
         * elements of the Array.
         */
        if(newArray.indexOf(array[i]) === -1) {
           
           // Push the elements into the new Array. 
           newArray.push(array[i]);
        } 
    }
    // Return the new Array.
    return newArray;
    
};









/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

// Loop through the array
// Create a new variable and assign it to an Array literal
// 

// Create a function called _.filter that takes an array and function as parameters
_.filter = function filter(array, funky) {
    
    // Create a variable and assign it as an array literal
    let newArray = [];
    
    // Create a result to assign the function to
    let result;
    
    // Loop through the array
    for(let i = 0; i < array.length; i++) {
        
        result = funky(array[i], i, array);
            
            // Push elements that pass the test into the new array
            if(result === true) {
            
            newArray.push(array[i]);
            
        } 
     }
    // Return the new array 
    return newArray;
    
};



/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

// Input: An array and function
// O: New array of elements that returned false when filter did not return true
// C: Must use _.filter() in the function
// E: N/A

// Loop through the array
// Check if filter does not return values

// Create a function called _.reject that takes an array and function as parameters
_.reject = function(array, funky) {
    //what does filter actually give us?
    //it gives us the values that passed a true false test
        //this means the filter to grab if done correctly should work.
    //run filter (same inputs)
    //filterResults
    //we want to compare this with array
    //anything not in filterResults that is in new array push into results
    //so. push array
    
    // Create a new variable and assign it to an array literal
    let results = [];
    
    // Assign the filter function to a variable
    let filterResults = _.filter(array, funky);
    
    // Loop through the array
    for(let i = 0; i < array.length; i++) {
        
        // Check if elements pass the test
        if(filterResults.includes(array[i])) {
            
        } else {
            // Push elements that do not pass tests into new array
            results.push(array[i]);
        }
    }
    // Return the results
    return results;
};
    
   

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/


/** Create a new function called _.partition that takes an array and function
 * as parameters
 */
_.partition = function(array, funky) {
 
 
 // Create a new variable and assign it an array literal  
 let subTruthy = []; 
    
    // Create another variable and assign it to an array literal
    let subFalsey = [];
    
    // Create another variable assigned to an array literal 
    let results = []; 
    
    // Create a variable to hold the function results
    let funkResult;
    
    // Loop throught the array
    for(let i = 0; i < array.length; i++) {
        
        // Assign the function results to the variable funkResult
        funkResult = funky(array[i], i, array); 
        
        if(funkResult === true) {
            
            //Push results that evaluate true into array
            subTruthy.push(array[i]);
            
        } else {
            
            // Push results that evaluate false into array
            subFalsey.push(array[i]);
        }
    }
    // Push the new arrays into one results array
    results.push(subTruthy, subFalsey);
    
    //Return the results
    return results;
};




/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/


// Create a function called _.map taking a collection and function as parameters
_.map = function(collection, funky) {
    
    // Create a variable assigned to an array literal
    let funkyCollection =[];
    
    // Check if collection is an array
    if(Array.isArray(collection)) {
        
        // Loop through the array
        for(let i = 0; i < collection.length; i++) {
            
            // Push values into array
            funkyCollection.push(funky(collection[i], i, collection));
            
        }
        
    }else {
        
        // If value is an object, loop through object with a for in loop
        for(let key in collection) {
            
            // Push values into array
            funkyCollection.push(funky(collection[key], key, collection));
        }
    }
    
    // Return new array
    return funkyCollection;
};



/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/


/** Create a function called _,pluck that takes an array and object
 * property as parameters
 */
_.pluck = function(array, prop) {
    /**Input-array and property
     * Output-an array of the value of property
     * Constraints-use map
     * Edge-unknown
    */

//the output will be an array with this function applied to it.
        //we want this function to convert the object at each index of the 
        // array, to the value of the key of each object.
        //this function will be operating on an object.
        //we want the end of this function to return a string.
        //---------we're operating on an object.
        //grab the string of the name from that object
        //return that
        
    // Assign the map function to a new variable    
    let results = _.map(array, function(object, index, array) {
        
        // Return the object values
        return object[prop];
    });
    
    // Return the results of the map array
    return results;
};






/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/



/** Create a function called _.every that takes a collection and function as
 * its parameters
 */ 
_.every = function(collection, funky) {
    
/**
 * I: A collection and function
 * O: A boolean value
 * C: Return a boolean based on all truthy or falsey outputs. 
 * E: What if function doesn't return a boolean?
 *    What if function is not given?
 * 
 * 1. _.map() INPUT: Collection and function :: OUTPUT: Collection function(value)
 * //  _.map(array, function(object, index, array)
 * 2. _.partition() INPUT: An array and func :: OUTPUT: Array: [[Truthy],[Falsey]]
 * 3. _.filter() INPUT: An array and function :: OUTPUT: Everything that passed
 * true in an array
 * 4. _.reject(): An array and function :: OUTPUT: Everything that failed as
 * false in an array
 * 
 * 
 * 5. _.every() Input: Collection and function :: OUTPUT: One-drop boolean
 * 
 * // Invoke map function
 *  // Assign map results into variable
 *  // Loop over results
 *  // if map results[i] return false
 *  // after loop return true
 */ 
 
    // Create a new variable
    let mapResults;
 
    // Check if there are 2 arguments being passed
    if(arguments.length == 2) {
 
            mapResults = _.map(collection, funky);
    
    // If the collection is an array pass the map function        
    } else if(Array.isArray(collection)){
        
            mapResults = _.map(collection, function(value, i, collection) {
            
            // If collection element passes test return true, false if otherwise
            if(collection[i]) {
                
                return true;
                
            } else {
                
                return false;
            }
            
        }); 
        
    } else {
            
            /** If the collection is an object return true if the properties
             * pass all the test and false if otherwise
             */ 
            mapResults = _.map(collection, function(value, key, collection) {
            
            if(collection[key]) {
                
                return true;
                
            } else {
                
                return false;
            }
        });
      
    }
    
    /** Loop through the array and return false if the results do not pass, 
     * return true if otherwise
     */ 
    for(let i = 0; i < mapResults.length; i++) {
            
            if(mapResults[i] === false) {
                
                return false;
            }
            
        }
        
        return true;
    
};





/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

/** Input: A collection and a function
  * Output: Return boolean of true if at least one element is true, return false if 
  * the test returns false for all elements that are false. Return true if at
  * least one element is truth if the function is not given, otherwise return
  * false.
  * 
  * Constraints: N/A
  * 
  * Edge cases: What if function doesn't return a boolean?
  *             What if function is not given?
  */


/** Create a function called _.some that takes a collection and a function as
 * parameters
 */ 
_.some = function(collection, funky) {
    
    // Create a new variable
    let mapResults;
    
    // Check if there are 2 arguments being passed
    if(arguments.length == 2) {
        
        mapResults = _.map(collection, funky);
    
    } else {
        
        // Pass the map function and assign it to a variable
        mapResults = _.map(collection, function(value, i, collection) {
            
            // Return true if the collection elements pass the tests
            if(collection[i]) {
                
             return true;
             
        } else {
            //Return false if the elements do not pass the test
            return false;
        }
        
        });
        
        /** Loop through the array. Return true if results pass the test and
         * return false if otherwise
         */ 
    }   for(let i = 0; i < mapResults.length; i++) {
            
            
            if(mapResults[i] === true) {
                
                return true;
            }
            
        }
        
        return false;

};





/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> 
*       as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex)
*       { return previousSum + currentValue }, 0) -> 6
*/

// Declare variables
    // Declare a garden variable to hold previous results
// Conditional statement for garden
// Loop over array 
    // For each loop, garden = function running over each array element
// Return garden outside of the loop


/** Create a function called _.reduce that takes an array, a function, and a
 * value called 'seed' as its parameters. Assign the seed parameter to the 
 * first element of the array
 */ 
_.reduce = function(array, funky, seed = array[0]) {
    
    // Create a new variable and assign it to 'seed'
    let garden = seed;
    
    // Declare 'i' as a variable
    let i;
    
    /** Check if all 3 arguments are called and assign the starting 
     * condition depending on the number of arguments
     */ 
    for(arguments.length === 3 ? i = 0 : i = 1; i < array.length; i++) {
        
        garden = funky(garden, array[i], i);
        
    }
    
    // Return the results
    return garden;
};




/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> 
*       as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/


// Use spread in the function parameter
    // Use a for loop to loop over the array of arguments
        // Use a for in loop to loop through the objects
            // For each key, reassign new object property to that key
// Return object



/** Create a function called _.extend that takes multiple objects as 
 * parameters
 */ 
_.extend = function(myObject, ...objects) {
    
    // Create a for loop to loop through the array of objects
    for(let i = 0; i < objects.length; i++) {
        
        // Create a for in loop to loop through the objects
        for(let key in objects[i]) {
            
            // Assign the object keys to the first object's values
            myObject[key] = objects[i][key];
        }
    }
    
    // Return the updated object
    return myObject;
};












//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
