//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Take an object and return its values as an array.

function objectValues(object) {
    
    
/* Use the Object.values(object) method to return the values of an Object as
 * an Array
 */
    return Object.values(object);

} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Return the keys of an object to a string.

function keysToString(object) {
    
    /* Create an object and use the Object.keys(object) method to convert
     * the keys into an array
     */
    var objKeys = Object.keys(object);
    
    // Join the strings using the .join method
    return objKeys.join(" ");

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Return the values of an object into a string, separated by spaces

function valuesToString(object) {
    
    // Create a new variable and assign it to an Array literal
    var strArray = [];
    
    /* Using a for-in loops, loop through the Object to push the Object keys
     * into a new Array
     */
    for(var key in object) {
    
        if(typeof object[key] === "string") {
            
            strArray.push(object[key]);
        }
    }
    
    // Return the new Array using the .join method to join the spaces in the String
    return strArray.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Return whether a given collection is an Array or an Object.

function arrayOrObject(collection) {
    
    /* Create an if/else if/else statement to set conditions to return the 
     * the datatypes of the given values
     */
     
    // Use Array.isArray(value) to check if a value is an Array 
    if(Array.isArray(collection)) {
        
        // Return a String with the datatype if value is an Array
        return "array";
    
    // If the value is null, return null as a String    
    } else if(collection == null) {
        
        return "null"; 
        
    /* Use the Object.prototype.toString.call(value) method to return if the
     * is a Date
     */
    } else if(Object.prototype.toString.call(collection) === '[object Date]') {
        
        return "date";
    
    /* If the tests do not return any of the above datatypes, return the 
     * datatype of the value using the 'typeof'
     */
    } else {
        
        return typeof collection;
    }
    // YOUR CODE ABOVE HERE //
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Capitalize the first letter of the given String.

function capitalizeWord(string) {
    /* Access the first letter of the string using the .charArt(index) method
     * and the .toUpperCase() function to access the first letter of a String.
     * Slice the rest of the String back on using the .slice method
     */
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Capitalize the first letter of each word in the given String.

function capitalizeAllWords(string) {
    
    // Create a new variable and assign it to an Array literal
    var strArray = [];
    
    // Split the spaces in the String value and assign it to a new variable
    var capStr = string.split(" ");
   
    // Loop through the new String variable to push it into the Array literal   
    for(var i = 0; i < capStr.length; i++) {
        
    /* Use .toUpperCase() to capitalize the first letter of the String value
     * as you iterate through it. Concat the rest of the String onto the 
     * newly capitalized String using the concat operator and slice method.
     */
    strArray.push(capStr[i][0].toUpperCase() + capStr[i].slice(1));
    
    }
    
    // Return the new String and join the spaces to create the new String
    return strArray.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

 //  Given an object with a name property, return its value with "Welcome (name)"
function welcomeMessage(object) {
    
    /* Concat the Strings "Welcome" and "!" to the Object's name property.
     * Use the .toUpperCase() method to capitalize the first letter of the 
     * Object's property and use the .slice method to concat the rest of the
     * name property onto the String.
     */
    return "Welcome " + object.name[0].toUpperCase() + object.name.slice(1) + "!";

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* Return the values of the objects 'name' and 'species' properties in a String
 * that reads "'Name' is a 'Species'". Capitalize the properties' first letter.
 */

function profileInfo(object) {
    
  /* Access the first letter of Object's name property and capitalize it by 
   * using the .charAt and .toUpperCase() methods. Use the .slice method 
   * to add the rest of the String back onto the String value. 
   * Concat the string " is a " using the "+" assignment operator and use
   * .charAt and .toUpperCase() again to capitalize the first letter of the
   * Object's species property. Use the .slice method to add the rest of the
   ( String back onto the String value.)
   */
  return object.name.charAt(0).toUpperCase() + object.name.slice(1) + " is a " + object.species.charAt(0).toUpperCase() + object.species.slice(1);

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Create a function called 'maybeNoises' that checks if an Object contains an
//  * object with an array of noises and returns

function maybeNoises(object) {
    
    /* Use a conditional statement to compare if the Object's noises property
     * is defined or if the Object literal has any properties.
     */
    if(object.noises == undefined || object.noises.length == 0) {
      
      // Return a String if either of the conditional statements are true.
      return "there are no noises";

      /* Use a conditional statement to check if the Object's noises property
       * has properties and join the spaces of the String if true.
       */
    } else if(object.noises.length > 0) {
            
            return object.noises.join(" ");
    }
    
} 
//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {

/* Create a new variable and assign it to the String value. Split the String
 * into an Array to access its elements
 */
var newString = string.split(" ");

// Loop forward through the new Array of Strings
for (var i = 0; i < newString.length; i++) {

    // Return true if the word value is found in the Array of Strings
    if (newString[i] === word) {

      return true;

        }
      
      }
    //Return false if the word value is not found in the Array of Strings
    return false;

    }

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    
    /* Use the .push method to push the name value into the 'friends' property
     * of the Object
     */
    object.friends.push(name);
    
    // Return the new Object.
    return object;
    
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    
   /* Use a conditional statement to return if the 'friends' property of an
    * Object is undefined or if it includes a given name value.
    */
   if(object.friends === undefined || object.friends.includes(name) === false) {
       
       return false;
   }
   
   // Return true if either of the conditional statements are true.
   return true;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* Return the names of people that are not listed as friends with a
 * given name.
 */

// Create a function called 'nonFriends' that takes two parameters: name and array
function nonFriends(name, array) {

// Create a new variable assigned to an Array literal.
var nonFriendsArr = [];
    
// Loop through the list of friends to access the nested Objects
for(var i = 0; i < array.length; i++) {
    
    /* Push the elements of the Array into the new Array literal if the friends
     * property does not include the name value and if the name value is not
     * the name of the name property being compared.
     */
    if(array[i].friends.includes(name) === false && array[i].name !== name) {

      nonFriendsArr.push(array[i].name);

         } 

    } 
 // Return the new Array.
 return nonFriendsArr;
 
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Update key values on an object. Create new key if key does not exist.

function updateObject(object, key, value) {
   
   /* Use a conditional statement and .hasOwnProperty method to assign a
    * new key/value pair to the Object, or change the value of an existing
    * property to the given value.
    */
   if(object.hasOwnProperty(key) === false || object.hasOwnProperty(key) === true) {
       
       object[key] = value;
       
   }
    
        // Return the updated Object.   
        return object;

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    
// Loop through the Array using a for loop.   
for (var i = 0; i < array.length; i++) {
    
    /* Using a conditional statement, access the Object's properties using
     * .hasOwnProperty method as it loops through the Array.
     */
    if(object.hasOwnProperty(array[i])) {
        
        // Use the delete function to delete properties.
        delete object[array[i]];
                    
        } else if(array.length === 0) {
            
            // Return nothing if the Array is empty.
            return;
        }    
    }

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    
    // Create a new variable and assign it to an Array literal.
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
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}