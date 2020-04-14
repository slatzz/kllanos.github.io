////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step = start < end ? 1 : -1) {
  
  // Create a variable and assign it to an array literal
  var array = [];

  // Push new elements into the new array based on the start and end conditions
  if (step > 0) {
    
    for (var i = start; i <= end; i += step) 
    
    array.push(i);
    
  } else if (step > 0) { 
    
    for (var i = start; i >= end; i += step) 
    
    array.push(i);
    
  } else if(step == 0) {
    
    return;
    
  }
  // Return the new array
  return array;
}  






////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(arrToAdd) {
  
  // Create a new variable to represent the sum of the Array elements
  var s = 0;
  
  // Use a for loop to access all the Array's elements
  for(var i = 0; i < arrToAdd.length; i++) {
    
    // Add the elements together as the loop iterates
    s += arrToAdd[i];
  }
  // Return the sum of the elements in the Array
  return s;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Reverse an Array
function reverseArray(array) {

// Create a new variable to hold an Array literal
var array2 = [];

// Loop backwards through the Array
for(var i = array.length - 1; i >= 0; i--) {
  
  /* Use the .push method to add each element into the new
   * Array as the loop iterates through the Array's elements
   */
  array2.push(array[i]);
  
}
    // Return the new Array
    return array2;

}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Reverse an Array in place
function reverseArrayInPlace(arrToRev) {

/* Loop through the loop using the Math.floor method to round our
 * decimals to the nearest whole number as we iterate through the elements
 */
 for(var i = 0; i < Math.floor(arrToRev.length / 2); i++) {
   
   // Assign looped elements of array to a new variable 
   var element = arrToRev[i];
   
   // Access elements as they are looped 
   arrToRev[i] = arrToRev[arrToRev.length - 1 - i];
   
   arrToRev[arrToRev.length - 1 - i] = element;
   
 }  // Return new reversed array
    return arrToRev;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(changeMeToList) {
  
  // Assign a new variable to null
  var list = null;
  
  // Loop backwards through the array
  for(var i = changeMeToList.length - 1; i >= 0; i--) {
    
    // Assign the variable to a list
    list = {value: changeMeToList[i], rest: list};
  }
    // Return the list
    return list;
  
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(changeMeToArray) {

// Assign a variable to an array literal
var array = [];

// Loop through the array and push looped values into the new array
for(var x = changeMeToArray; x; x = x.rest) {
  
  array.push(x.value);
}
  // Return new array 
    return array;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// 

function prepend(value, arrayToList) {
  
  // Return a new list
 return {value, rest: arrayToList};

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(arrToList, newValue) {
  
  // Check if values in an array match the nth value
  
  // Return undefined if value is not in array
  if(!arrToList) {
    
    return undefined;
    
    // Return first element in array if newValue is 0
  } else if(newValue == 0) {
    
    return arrToList.value;
    
  } else {
    
    // Return the nth value otherwise
    return nth(arrToList.rest, newValue - 1);

  }

}
////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Return if two values deeply equal each other.

function deepEqual(value1, value2) {
  
  // Compare if the two give values are deeply equal to each other
  if (value1 === value2) 
      return true;
  
  // Compare if values are deeply equal to 'null'
  if (value1 == null || typeof value1 != "object" ||
      value2 == null || typeof value2 != "object") 
      return false;

  // Access the length of the Object's values
  var keys1 = Object.keys(value1);
  var keys2 = Object.keys(value2);

  if (keys1.length != keys2.length) 
      return false;
  
  // Loop through the object to compare their key/value pairs
  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(value1[key], value2[key])) 
      return false;
  }

      return true;
}
  


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
}
