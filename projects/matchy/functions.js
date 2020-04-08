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
    
    for (var i = 0; i < list.length; i++) {
        
        if (list[i].name === animalName) {
            
            return list[i]
            
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
    
    for (var i = 0; i < animals.length; i++) {
        
        if (animals[i].name === name) {
            
            animals.splice(i, 1, replacement);
            
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

for (var i = 0; i < animals.length; i++) {
        
        if (animals[i].name === name) {
            
            animals.splice(i, 1);
            
        } else if (i === animals.length-1) {
            
            return null
        }
    }
    
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal) {
    
    if (animal.name.length > 0 && animal.species.length > 0) {
        
        for (var i = 0; i < animals.length; i++) {
            
            if (animals[i].name === animal.name) {
                
                return null;
                
            } else if (i === animals.length - 1) {
                
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
