/*
 * DATATYPES:
 *
 * 0.  Computers read different types of values, or datatypes. They are 
 *      classified as primitive, or simple, datatypes and complex datatypes.
 *
 *      - Primitive datatypes include: numbers, strings, booleans, Nan, 
 *      undefined, and null.
 *
 *      - Complex dataypes include: objects, arrays, and functions.
 *
 * 1.  PRIMITIVE VS COMPLEX DATATYPES:
 *
 *      - Primitive datatypes are immutable, meaning they cannot be changed.
 *      They hold a finite amount of memory and cannot collect, hold, or acquire
 *      other values. Their original value is not changed when operations are 
 *      performed on them. Primitive datatypes copy by value. That is, when they
 *      are assigned or passed through a function, they are copied from one 
 *      variable to the next and the original value is not changed.
 *
 *      - Complex dataypes are mutable, can be of any size and hold mixed
 *      datatypes. Because they do not have a fixed size, their variables rely
 *      on references to a location storing memory, thus they copy by reference
 *      to the complex types and their values change as they are referenced.
 *
 * 2.  PRIMITIVE DATATYPES:
 *
 *      -   Numbers are numeric data. They can be whole numbers, negative
            integers, or have decimal points.: 
 */         var x = 99; // This is an example of a number.
            console.log(x); // Prints 99
    
//      -   Strings are character data placed within quotation marks.:
            var str = "This is a string.";
            console.log(str); // Prints "This is a string."
            
/*          We can access individual characters in a string by accessing 
 *          its length property using .length method. We can access individual 
 *          characters in a string by assigning it to a variable and accessing 
 *          its index. 
 */         Ex: var stringExample = "Example string";
            stringExample[0]; // Prints “E”

//      -   Booleans return true or false: 
            var myBool = 9 < 20;
            console.log(myBool); // Prints true
            
//      -   NaN, or Not a Number
            var exNan = 100/"Fifty";
            console.log(exNan); /* Prints NaN because you cannot divide a number
            a string. */
            
//      -   Undefined appears when a variable is not assigned a value.
            var name;
            console.log(name); /* Prints undefined. var name has not yet been
            assigned a value. */
            
//      -   Null is an empty or non-existent value and must be assigned.
            var k = null;
            console.log(k); // Prints null
            
/* 3.  COMPLEX DATATYPES:
 *
 *       -   Arrays are a collection of indexed values. Arrays are represented
 *           by square brackets [] and can hold multiple datatypes.
 *
 */         var myArray = ["This is a string.", 900, true];
            console.log(myArray); // Prints ["This is a string.", 900, true]
            
/*              - An array's values are stored at indexes, the first element
                in an array begins at 0.
 */             myArray[0]; // Prints "This is a string"
                //Access the elements of the first index:
                myArray[0][2]; // Prints "i"
                
                myArray[1]; // Prints 900
                myArray[2]; // Prints true
                
/*              - Add elements to the array using bracket notation, the
 *              .unshift method to add items to the beginning of the array, 
 *              or .push method to add items to the back of the array.
 *              
 *              - Remove elements from the array by reassigning them using 
 *              bracket notation, or use the .shift() method to remove items
 *              from the front of the array, or the .pop() method to remove
 *              items from the back of the array.
 *                               
 *                                      ~~~
 *                                      
 *       -   Objects are a collection of key/value pairs. Objects are represented
 *           by curly braces {} and can hold multiple datatypes.
 *
 */          var myObject = {
                            
                            "Name": "Kristiana",
                            "Age": 27,
                            "Will pass Bootcamp?": true
        
                            };
            console.log(myObject); 
/*          Prints the following:
 *
 *                            {
 *            
 *                            "Name": "Kristiana",
 *                            "Age": 27,
 *                            "Will pass Bootcamp?": true
 *        
 *                            };
 *
 *          - Add properties to the object using dot or bracket notation.
 *          Note: Using dot notation is the preferred method.
 */         myObject.School = "Operation Spark";
            myObject["Coding Language"] = "Javascript";
            console.log(myObject); 
 /*          Prints the following:
 *
 *                            {
 *            
 *                            "Name": "Kristiana",
 *                            "Age": 27,
 *                            "Will pass Bootcamp?": true
 *                            School: "Operation Spark"  
 *                            "Coding Language": "Javascript"
 *
 *                            };
 *
 *          - We can access an object's keys and values using various methods.
 */         Object.keys(myObject); // Prints all keys as strings in an array
            Object.values(myObject); // Prints all values as strings in array
            myObject.age; // Prints 27
            myObject["Name"]; // Prints "Kristiana"
            myObject.hasOwnProperty("School") // Prints true
            myObject.hasOwnProperty("Favorite Food") // Prints false
            
//          - Delete object properties using the delete method:
            delete myObject.Age; // Deletes age property from object
 
/*                                    ~~~ 
 *
 *       -   Functions are a piece of program, or subprogram, that perform
 *           actions upon input values. Javascript includes built-in functions,
 *           such as Math.random(). As programmers, we can also create our own
 *           functions.
 *
 */          function add(num1, num2) {
                    return num1 + num2;
                }; 
                
                    add(40, 20);
            
            // Prints 60

/* 4.  INFINITY AND -INFINITY VALUES:
 *
 *       These values represent numbers exceeding floating point numbers, aka
 *       computers work with integer numbers, thus when a number continues on
 *       exponentially, for example, the computer must be able to read these
 *       numbers. When a number exceeds the computers ability to compute those
 *       integers, the console prints Infinity.
 *       
 *       For example:
 */      
        var infinityEx = 10 / 0;
        console.log(infinityEx); // Prints Infinity