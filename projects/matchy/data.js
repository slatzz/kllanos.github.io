/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Create a new variable and assign it to an Object literal.
var animal = {};

// Assign a property called 'species' to the Object and assign it a value.
animal.species = 'cat';

// Assign a name property to the Object and assign it a value.
animal['name'] = 'fluffy';

// Assign a noises property to the Object and assign an Array literal.
animal.noises = [];

// Log the animals Object to the console.
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Create a new variable called 'noises' and assign it to an Array literal.
var noises = [];

// Using bracket notation add an element to the array with a string
noises[0] = 'meow';

// Using the push method, add a noise to the Array.
noises.push('hiss');

// Add another element to the array using the .unshift method.
noises.unshift('purr');

// Using bracket notation, add another noise to the Array.
noises[noises.length] = 'yowl'

// Log the length of noises array to the console.
console.log(noises.length);

// Log the last element of the noises array without hard coding.
console.log(noises[noises.length - 1]);

// Log the noises array to the console.
console.log(noises);



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* Using bracket notation, assign a noises property called 'noises' 
 * to the animal array
 */
animal['noises'] = noises

// Using the push method, add another noise to the noises Array.
noises.push('chirp')

// Log the animal Array to the console.
console.log(animal)


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 
 * We can access properties on objects by using dot notation (object.key) to
 * return key values. We can also use bracket notation to access properties
 * on objects with object["key"] to return the value.
 *
 *  To access all properties on objects at once, we can use for-in loops.
 *  with for (var key in object) { 
 *          console.log(key);
 *          console.log(object[key]);
 
 * 2. What are the different ways of accessing elements on arrays?
 *
 *  We can access elements of arrays using bracket notation arr[index] and
 *  for loops.
 *
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Create a variable called 'animals' and assign it an Array literal.
var animals = [];

// Push the animal Array to the new 'animals' Array.
animals.push(animal);

// Log 'animals' to the
console.log(animals);

// Create a duck object for the list
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };

// Using the push method, add the 'duck' Object to the 'animals' Array.
animals.push(duck);

// Log the 'animals' Array to the console.
console.log(animals);

/* Create a new variable and assign it an Object with a new animal.
 * Assign the Object a species, name, and noises property, and assign them
 * values for each.
 */
var bear = { species: 'bear', name: 'Winnie The Pooh', noises: ['growl', 'zzz'] };

/* Create a variable assigned to another animal with species, name, and 
 * noises properties and assign them values for each.
 */
var mouse = { species: 'mouse', name: 'Tom', noises: ['squeak', 'silence'] };

// Push the new Objects to the 'animals' Array.
animals.push(bear, mouse);

// Log the 'animals' Array to the console.
console.log(animals);

// Log the 'animals' Array's length property to the console.
console.log(animals.length);




//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* 1. Choose a data structure to hold friends list. 
 * 2. We chose an array for our data structure because it an ideal data structure
 * for holding lists, and it will be able to hold any objects.
 */  
 
 
 // Create a variable called friends and assign it to an Array literal.
var friends = [];
 
 // Create a function called getRandom and returns a random index from animals 
  
function getRandom (animals) {
      
      /* Use the Math.floor function and Math.random function to return
       * a random animal from the 'animals' Array. 
       */
      return Math.floor(Math.random() * animals.length);
  }

/* Using the push method, use the getRandom function to push the random names
 * into the 'friends' Array.
 */
friends.push(animals[getRandom(animals)].name);

// Log the 'friends' Array to the console.
console.log(friends);

// Use bracket notation to add the new 'friends' Array to the 'animals' Array.
animal['friends'] = friends;

// Log the 'animals' Array to the console.
console.log(animal);






/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}