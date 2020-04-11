/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* Create a function called 'search' that takes a paramater representing 
 *  an Array of `animals` and Takes a paramater representing a String, 
 *  the name of an animal on which to perform a search.
 */ 

function search(list, animalName) {
    
    // Loop through the 'list' Array using a for loop.
    for (var i = 0; i < list.length; i++) {
        
        /* Use a conditional statement to return if the list's 'name' 
         * property matches the given animalName value.
         */
         
        if (list[i].name === animalName) {
            
            return list[i]
          
        // Return null if the 'name' property is not found.    
        } else if (i === list.length-1) {
            
            return null
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* Create a function called 'replace' that takes 3 parameters (animals, name,
 * replacement) that conducts a search through the 'animals' Array for a 
 * String representing a 'name' in an Object and replaces that Object with a
 * replacement Object. 
 * If no duplicates are found, then return null.
 */
 
 
function replace(animals, name, replacement) {
    
    // Loop through the 'animals' Array using a for loop.
    for (var i = 0; i < animals.length; i++) {
        
        /* Use a conditional statement and replace the 'name' value 
         * with the 'replacement' value if it already exists in the 
         * 'animals' Array.
         */
        if (animals[i].name === name) {
            
            /* Use the .splice method to replace the 'name' value with the
             * 'replacement' value.
             */
            animals.splice(i, 1, replacement);
            
        /* If there are no replacements, return null. Access all the last elements
         * of the array by using the .length - 1 property.
         */
        } else if (i === animals.length-1) {
            
            return null
        }
    }
    
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* Create a function called 'remove' that takes two parameters (animals, name)
 * that searches the 'animals' Array for a 'name' and removes it from the
 * Array if an animal with that 'name' exists.
 */

function remove(animals, name) {

// Loop through the 'animals' Array using a for loop.
for (var i = 0; i < animals.length; i++) {
        
        /* Using a conditional statement, use the .splice method to remove
         * the 'name' value if it exists in the 'animals' Array.
         */
        if (animals[i].name === name) {
            
            animals.splice(i, 1);
        
        /* Use the .length - 1 property to return null if the 'name' value
         * does not exist in the 'animals' Array.
         */
           
        } else if (i === animals.length-1) {
            
            return null
        }
    }
    
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal) {
    
    /* Use a conditional statement to access the length of the 'animals' Array
     * 'name' and 'species' properties.
     */
    if (animal.name.length > 0 && animal.species.length > 0) {
        
        // Loop through the 'animals' Array with a for loop.
        for (var i = 0; i < animals.length; i++) {
            
            /* Use a conditional statement to compare the looped elements with
             * the 'name' property of the 'animal' Object.
             */
            if (animals[i].name === animal.name) {
                
                /* Return null if the 'name' element is the same as the 
                 * 'animal' property.
                 */
                return null;
                
            /* Use the .length - 1 property to compare the last element of the 
             * 'animals' Array with the looped element
             */
            } else if (i === animals.length - 1) {
                
                /* Use the push method to push the 'animal' Object into the
                 * 'animals' Array.
                 */
                animals.push(animal)
            }
        }
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
