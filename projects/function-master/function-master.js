//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Take an object and return its values as an array.

function objectValues(object) {
    
    return Object.values(object);

} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Return the keys of an object to a string.

function keysToString(object) {
    
    var objKeys = Object.keys(object);
    
    return objKeys.join(" ");

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Return the values of an object into a string, separated by spaces

function valuesToString(object) {
    
    var strArray = [];
    
    for(var key in object) {
        
        if(typeof object[key] === "string") {
            
            strArray.push(object[key]);
        }
    }
    
    return strArray.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Return whether a given collection is an Array or an Object.

function arrayOrObject(collection) {
    
    if(Array.isArray(collection)) {
        
        return "array";
        
    } else if(collection == null) {
        
        return "null"; 
        
    } else if(Object.prototype.toString.call(collection) === '[object Date]') {
        
        return "date";
        
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
    
    return string.charAt(0).toUpperCase() + string.slice(1);
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Capitalize the first letter of each word in the given String.

function capitalizeAllWords(string) {
    
    var strArray = [];
    
    var capStr = string.split(" ");
   
    for(var i = 0; i < capStr.length; i++) {
        
    strArray.push(capStr[i][0].toUpperCase() + capStr[i].slice(1));
    
    }
    
    return strArray.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

  //  Given an object with a name property, return its value with "Welcome (name)"

function welcomeMessage(object) {
    
    return "Welcome " + object.name[0].toUpperCase() + object.name.slice(1) + "!";

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* Return the values of the objects 'name' and 'species' properties in a String
 * that reads "'Name' is a 'Species'". Capitalize the properties' first letter.
 */

function profileInfo(object) {

  return object.name.charAt(0).toUpperCase() + object.name.slice(1) + " is a " + object.species.charAt(0).toUpperCase() + object.species.slice(1);

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Create a function called 'maybeNoises' that checks if an Object contains an
//  * object with an array of noises and returns

function maybeNoises(object) {

    if(object.noises == undefined || object.noises.length == 0) {
      
      return "there are no noises";

    } else if(object.noises.length > 0) {
            
            return object.noises.join(" ");
    }
    
} 
//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {

var newString = string.split(" ");

for (var i = 0; i < newString.length; i++) {

    if (newString[i] === word) {

      return true;

        }
      
      }

    return false;

    }

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    
    object.friends.push(name);
    
    return object;
    
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    
   if(object.friends === undefined || object.friends.includes(name) === false) {
       
       return false;
   }
   
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
    
// Loop through the list of friends to access the nested Objects
for(var i = 0; i < array.length; i++) {
    
    var nonFriendsArr = [];
    
    if(array.includes(name) || array[i].friends !== array[i].name) {

      nonFriendsArr.push(array[i].name);

         } 

    } 
 return nonFriendsArr[i];
 
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Update key values on an object. Create new key if key does not exist.

function updateObject(object, key, value) {
    
   if(object.hasOwnProperty(key) === false || object.hasOwnProperty(key) === true) {
       
       object[key] = value;
       
   }
    
return object;

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    
for (var i = 0; i < array.length; i++) {
    
        
    if(object.hasOwnProperty(array[i])) {
        
        delete object[array[i]];
                    
        } else if(array.length === 0) {
        
            return;
        }    
    }

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    
    var newArray = [];
    
    for(var i = 0; i < array.length; i++) {
        
        if(newArray.indexOf(array[i]) === -1) {
            
           newArray.push(array[i]);
        } 
        
    }
    
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