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

   function makeContact(id, nameFirst, nameLast) {
       return {
       id: id,
   nameFirst: nameFirst,
   nameLast: nameLast

 };
 }
     function makeContactList(id, nameFirst, nameLast) {
    var contacts = [
    {
        "id": 1,
        "nameFirst": "Max",
        "nameLast": "Gaudin"
    },
    {
        "id": 2,
        "nameFirst": "John",
        "nameLast": "Fraboni"
    },
    {
        "id": 3,
        "nameFirst": "Alon",
        "nameLast": "Robinson"
    },
    {
        "id": 4,
        "nameFirst": "Mykia",
        "nameLast": "Smith"
    },
    {
        "id": 5,
        "nameFirst": "Steve",
        "nameLast": "Price"
    },
    {
        "id": 6,
        "nameFirst": "George",
        "nameLast": "Mauer"
    },
    {
        "id": 7,
        "nameFirst": "Ben",
        "nameLast": "Schenker"
    },
    {
        "id": 8,
        "nameFirst": "Jaelle",
        "nameLast": "Schuerman"
    },
    {
        "id": 9,
        "nameFirst": "Erika",
        "nameLast": "Fraboni"
    },
    {
        "id": 10,
        "nameFirst": "Alice",
        "nameLast": "Green"
    }
    
     
],
    // we implemented the length api for you //
   function length(contact) {

        return contacts.length;

    },
    addContact: function(contact){

      return contacts.push(contact);
    },
    removeContact: function(contact){
        for(var i = 0; i < contacts.length; i++){
           if(contacts[i] === contact) {
        return contacts.splice(i, 1);
           }
        }
    },
    find: function(fullName) {
        for(var i = 0; i < contacts.length; i++) {
            if(fullName === contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"]) { 
            return contacts[i];
            }
        }
    }   
    
     ];
     
   };



 


// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
