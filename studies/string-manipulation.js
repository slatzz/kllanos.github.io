/*
 * STRING MANIPULATION:
 *
 * 0. We can manipulate strings using operators and various methods. 
 *  
 * 1. CONCATENATING STRINGS WITH OPERATORS:
      - Concatenation is defined as joining together two values. In this case
 *    we want to concatenate two strings. 
 *
 *    - Use the concatenation operator,"+", to join your strings. 
 */        var myNameIs = "My name is ";
           var myFirstName = "Kristiana.";
           console.log(myNameIs + myFirstName); 
           // Prints "My name is Kristiana."
 
/*    - We left a space before the closing quotation. Another way to 
 *    add a space between the strings is to use " ".
 */        var myNameIs = "My name is"; // No space before closing quotation.
           var myFirstName = "Kristiana.";
           console.log(myNameIs + " " + myFirstName);
//         Prints "My name is Kristiana."

/*    - We have joined two strings together using the concatentation operator,
 *     "+". We can also use the shorthand assignement operator "+=" to 
 *     concatenate strings.
 */        var myNameIs = "My name is ";
           myNameIs += "Kristiana.";
/*         Prints "My name is Kristiana."
 *
 *    - Furthermore... We can also concatenate numbers with strings.
 */        var concatNumbers = 3 + "4";
           console.log(concatNumbers); // Prints 34. 
/*
 * 2. STRING METHODS:
 *
 * Methods are used to perform an action upon data. Therefore, 
 * string methods are used to manipulate strings. 
 *
 * STRING METHODS AND EXAMPLES:
 */ var exampleString = "Hello World";

// .length() - Returns the length of a string.
    console.log(exampleString.length); // Prints 11

// .charAt() - Returns the specific index of a specified string character.
    console.log(exampleString.charAt(3)); // Prints "l"

// .concat() - Joins together two or more strings.
    console.log(exampleString.concat("!")); // Prints "Hello World!"

// .endsWith() - Returns the last character of a string as a boolean.
    console.log(exampleString.endsWith("World")); // Prints true

// .startsWith () - Returns the first character of a string as a boolean.
    console.log(exampleString.startsWith("Hi")); // Prints false

// .indexOf() - Returns index of the first instance of a specified value.
    console.log(exampleString.indexOf("e")); // Prints 1

// .lastIndexOf() - Returns index of the last instance of a specified value.
    console.log(exampleString.lastIndexOf("l")); // Prints 9

// .replace() - Replaces a specified value with another value.
    console.log(exampleString.replace("Hello", "Goodbye Cruel"));
//  Prints "Goodbye Cruel World"

// .split() - Splits a string and turns it into an array.
    console.log(exampleString.split()); // Prints ["Hello World"] 

// .slice() - Removes a specified values from a string.
    console.log(exampleString.slice(4, 8)); // Prints "O wo"

// .substring() - Returns a specified chunk of a string.
    console.log(exampleString.substring(3, 7)); // Prints "lo W"

// .toLowerCase() - Changes the case of a string to lowercase.
    console.log(exampleString.toUpperCase()); // Prints "HELLO WORLD"

// .toUpperCase() - Changes the case of a string to uppercase.
    console.log(exampleString.toLowerCase()); // Prints "hello world"