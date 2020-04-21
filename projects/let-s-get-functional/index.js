// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-kllanos");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    // Using filter find the # of male customers in our list
    // return array.gender === "male";
    let arrOfMales = _.filter(array, function(customerObj){
        // filter all of the male custies
        // each customerObj has a gender prop
        return customerObj.gender === "male";
    });

    return arrOfMales.length;
};

///////////////////

var femaleCount = function(array) {
    // using the reduce function find the number of female custies
    let totalFemale = _.reduce(array, function(sumOfFem, customerObj){
        // Check if the customer is a female
            // Increment sum by one
            if(customerObj.gender === "female") {
                
                sumOfFem += 1;
            }
        // Check if the customer is not a female
            // Keep current sum
            return sumOfFem;
    }, 0);
    
    console.log(totalFemale);
    // Return the total of females
    return totalFemale;
};

///////////////////

 // Assign the reduce function to a variable
 // Compare all customer ages
    // Assign the oldest customer to a variable
// Return the oldest customer

var oldestCustomer = function(array) {
    
    // Call the reduce function
    return _.reduce(array, function(oldestAge, customerObj) {
        
        // Compare all customers' ages and return the oldest customer
        if(customerObj.age > oldestAge.age) {
            
            oldestAge = customerObj;
            // Return the oldest age
        } return oldestAge;
        // Return the name of the oldest customer
    }).name;
    
};

///////////////////

// Use reduce to find the youngest customer
// Check if the customer age is less than other customers' ages
// Return the youngest
    // Return the name of the youngest customer

var youngestCustomer = function(array) {
    
    // Call the reduce function
    return _.reduce(array, function(youngestAge, customerObj) {
            
            // Compare ages of customers to find the youngest
            if(customerObj.age < youngestAge.age) {
                
                youngestAge = customerObj;
              
              // Return the youngest age  
            } return youngestAge;
            
      // Return the name of youngest customer      
    }).name;
    
};

///////////////////

// create a new array
    // push balance amounts as numerical values into array
// use reduce function to add all balances together


var averageBalance = function(array) {
  
  // Create a new variable and assign it to an array literal  
  let balanceArr = [];
  
  // Assign the length of array to a variable
  let numToAverage = array.length;
  
    // console.log(numToAverage);
  
    // Convert the balance strings to numerical values for each customer
    array.forEach((person) =>  {
        
     balanceArr.push(Number(person.balance.replace(/[$,]/g, "")));
      
    });  
        // Use reduce function to add the balances together
        let summ = balanceArr.reduce((sumOfBalances, customerObj) => {
            
            return sumOfBalances + customerObj;
            
        }, 0);
            // Return the average of the balances
            return Math.floor(summ) / numToAverage ;

};
    
///////////////////

// Filter through array and assign it to a variable
// return the customer name
// Filter thru the new array
// return if the filtered friends matches the letter

var friendFirstLetterCount = function(array, customer, letter) {

    /** Filter through the array to check if the customer param
     * matches the iterated customer name
     */ 
    let filteredFriendz = array.filter((customerObj) => {
        
        return customerObj.name === customer;
    });
    
    /** Filter through new array to check if the first letter of friend's
     *  name matches the letter param
     */ 
    return filteredFriendz[0].friends.filter((friendInQuestion) => {
        
        return friendInQuestion.name[0].toLowerCase() === letter.toLowerCase();
        
    }).length;

};

///////////////////

var firstLetterCount = function(array, letter) {
    
  /** Filter through the array to return the number of customers whose name
   * begins with the letter param
   */ 
  return array.filter(function (customer) {
      
    return customer.name[0].toLowerCase() === letter.toLowerCase();
   
   // Access the length of the array to obtain the number of customers 
  }).length;  
  
};
///////////////////

// create a new array to hold the customers who are friends with a give customer
// access the friend's object in the customers array
    /** iterate through the customers array to check if customer[i].friend's
     * friend's object has a name property with the value matching a 
     * customer[i].name. 
     *  // If true, return the customer name owning the object 
     */ 
var friendsCount = function(array, customerName) {
        
        /** Use the reduce function to return an array with the customers who
         * are in other customer's friends
         */ 
        return array.reduce((friendArr, customer) => {
            
            customer.friends.forEach(function(friendo) {
                
                if(friendo.name === customerName) {
                    
                    // Push the friends that return true into new array
                    friendArr.push(customer.name);
                }
            });
            
            // Return new array
            return friendArr;
        }, []);

    };

///////////////////


var topThreeTags = function(array) {
    
  // Use the pluck function to return the tags into an array
  let pluckedTags = _.pluck(customers, "tags");

  // console.log(pluckedTags);
    
  // Flatten the new pluckedTags array into a single array
  function flatten(arr) {

    let flatTags = [];

    arr.forEach(tag => {

      if(Array.isArray(tag)) {

        flatTags = flatTags.concat(flatten(tag));

      } else {
          
        flatTags.push(tag);
      }
    });

    return flatTags;
  }

  let tagsArray = flatten(pluckedTags);
  
//   console.log(tagsArray);

    /** Use the reduce method to turn the tags Array into an Object with 
     * the number of instances a tag appears in the customer's objects
     */ 
  let tagCount = _.reduce(tagsArray, function(customerObj, tag) {

      if(customerObj [tag]) {
        
        customerObj [tag]++;

      } else {

        customerObj [tag] = 1;
      }
      
      // Return the new object
      return customerObj;

    }, {});

        // console.log(tagCount);
        // Create a new variable and assign it to an array literal
        let arrayOfNestedTags = [];
        
        // Use a for in loop to iterate through the tags Object
        for(let key in tagCount) {
            
            // push the Object into an array
            arrayOfNestedTags.push([key, tagCount[key]]);
    }

        // console.log(arrayOfNestedTags);
        
        // Sort the tags by instances used in descending order (highest to lowest)
        arrayOfNestedTags.sort(function(a, b) {

            return b[1] - a[1];
    });

        // console.log(arrayOfNestedTags);
        // Create a new variable and assign it to an array literal
        let finalArray = [];
        
        // Isolate the top three tags using the slice method and create a new variable
        let top3Tags = arrayOfNestedTags.slice(0, 3);

            
        // Map through the top3Tags array to push the strings into a new array
        let topTagz = _.map(top3Tags, function(tagCountArr) {
            
            
            return finalArray.push(tagCountArr[0]);
    });
            // Return the final array with the top 3 tags as strings
            return finalArray;
    
};

///////////////////

// Sum up the number of males
// Sum up the number of females
// Sum up the number of nonbinary folks
    // Create a new object with properties of each of these elements
    
// Call the reduce function over the customers array
    // For each customerObj, access gender property
    // Conditional statement: 
        // If gender property exists
            // += 1
        // Else
            // = 1
// Update object literal with gender count
// Return the gender count
    
    
var genderCount = function(array) {
    
    /** Create a seed and assign it to an object that will act as a base for
     * the resulting Object
     */ 
    let seed = {female: 0, male: 0, 'non-binary': 0}; 
    
    /** Use the reduce function to assign keys and values to the Object
     * that will accumulate the number of each gender to the Object's values
     */ 
    return _.reduce(array, function(personCount, genderValue, i) {
        
        if (array[i]['gender']) {
            
            personCount[array[i]['gender']] += 1;
            
        } else {
            
            personCount[array[i]['gender']] = 1; 
        } 
        
        // Return the new Object
        return personCount; 
        
    }, seed);
    
};
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
