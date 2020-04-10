// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //

/* Return an object using a function called 'makeContact' that takes the 
 * parameters: id, nameFirst, and nameLast.
 */
 
function makeContact(id, nameFirst, nameLast) {
    
    return {id: id, 
            nameFirst: nameFirst, 
            nameLast: nameLast
           }
    
} 


function makeContactList(id, nameFirst, nameLast) {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
        // Create a variable called 'contacts' and assign it to an Array literal
        var contacts = [];
    
    
    return {
        
         // Return the length of the contact list 
         length: function() {
             
            return contacts.length;
            
         },
        
          // Push the contacts into the 'contacts' array literal
         addContact: function(contact) {
             
             return contacts.push(contact);
                 
             },
         /* Use a for loop to access the contacts in the contacts list to look
          * for the first and last names of the contacts. Concat these names
          * together and return the output
          */
         findContact: function findContact(fullName) {
        
             for(var i = 0; i < contacts.length; i++) {
                 
                 if(fullName === contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"]) {
                     
                     return contacts[i];
                 }
             }
        
         },
         
         /* Remove contact Object from contact list by looping through the
          * contacts list. Check if the contact exists in the list and use
          * splice method to remove the contact. Return the output.
          */
         removeContact: function removeContact(contact) {
             
             for(var i = 0; i < contacts.length; i++) {
                 
                 if(contact === contacts[i]) {
                     
                     return contacts.splice(i, 1);
                 }
             }
        },
        
         printAllContactNames: function () {
             
            // Create a new array literal to push list of full names into
            var allContactsArray = [];
            
            //Loop through contacts list to concat first and last name Strings
            for(var i = 0; i < contacts.length; i++) {
            
            // Push these new strings into new Array    
           allContactsArray.push(contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"]);
            
            }
            // Join new lines to return the new Array
            return allContactsArray.join("\n");
        
        }
        
    };
    
}

// YOUR CODE GOES ABOVE HERE //

 

 





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
