/*
 * OPERATORS:
 *
 * 0. HOW DO WE USE THEM?
 *      - Operators are used to perform actions upon our values, and there are
 *      specific operators for accomplishing specific actions.
 * 
 * 1. TYPES OF OPERATORS AND EXAMPLES
 *
 *
 *      - The ASSIGNMENT OPERATOR, "=", is used to assign values to variables.
 */         var myCat = "Sheba"; // myCat is initialized.
            console.log(myCat); // Prints "Sheba"
            
/*          - We can also use the shorthand assignment operator "+=" to
 *            concat strings together and in arithmetic operations.
 */         var firstName = "Kris";
            firstName += "tiana"; 
            console.log(firstName); // Prints "Kristiana"
            
            var addMeToSomething = 100;
            addMeToSomething += 500;
            console.log(addMeToSomething); // Prints 600
 
/*      - ARITHMETIC OPERATORS are used for mathematical calculations.
 *
 *          1. Use "+" to add.
 */         console.log(5 + 5); // Prints 10
            
//          2. Use "-" to subtract.
            console.log(5 - 3); // Prints 2
            
//          3. Use "*" to multiply.
            console.log(6 * 7); // Prints 42
            
//          4. Use "/" to divide.
            console.log(144 / 12); // Prints 12
            
//          5. Use "%" to find a remainder.
            console.log(19 % 5); // Prints 4
            
            
/*      - COMPARISON OPERATORS are used to compare values and return a Boolean,
 *          true or false.
 *
 *          1. Use "<" to see if a value is less than another value.
 */         console.log(65 < 9); // Prints false
            
//          Note: Use "<=" for less than or equal to comparisons.
            console.log(65 <= 65); // Prints true
            
//          2. Use ">" to see if a value is greater than another value.
            console.log(65 > 9); // Prints true
            
//          Note: Use ">=" for greater than or equal to calculations.
            console.log(65 >= 66); // Prints false
            
//          3. Use "==" to see if a value is LOOSELY equal to another value.
            console.log("9" == 9); // Prints true
//          Note: Prints true because the code regonizes both values contain
//          the number 9.
            
//          4. Use "===" to STRICTLY compare values.
            console.log("9" === 9); // Prints false
//          Note: Prints false because the string "9" is not equal to a 
//          numerical value of 9. Different datatypes are not stictly equal.
            
//          5. Use "!" to evaluate if values are not equal.
            console.log("18" != 18); // Prints false

            
/*      - LOGICAL OPERATORS are used to evaluate conditions between values and
 *          return a boolean.
 *
 *          1. AND OPERATOR, "&&", evaluates if BOTH conditions are TRUE.
 */         console.log(2 == 2 && 40 > 10); // Returns true

//          2. OR OPERATOR, "||", evaluates if ONE of the conditions is TRUE.
            console.log(100 >= 99 || 99 < 15); // Returns true
            console.log(99 >= 100 || 99 < 15); // Returns false
                    
/*          3. Use BANG OPERATOR, "!", before operands to flip the truthiness
 *            of a value. This is also a unary operator, discussed next.
 */         console.log(54 !== 54); // Prints false
 
            
/*      - UNARY OPERATORS are words or symbols used to evaluate values.
 *           
 *          1. typeof OPERATOR returns a value's datatype.
 */         console.log(typeof "This is a string"); // Prints "string"
            console.log(typeof 99); // Prints "number"
            
/*          2. delete OPERATOR deletes a specific index from an array
 *           or a property from an object.
 */         var myObject = {
     
            "name": "Kristiana",
            "age": 27,
            "phone": 5555555555
            
            }; 
            console.log(delete myObject.phone);
            console.log(myObject);
            
/*          Prints {
 *               "name": "Kristiana",
 *               "age": 27
 *              };
 *
 
 *          3. INCREMENT OPERATOR adds 1 to a value.
 */         for(var counter = 0; counter < 3; counter++ ) {
                console.log(counter);
                }; 
                
                counter;
/*          Prints  0
 *                  1
 *                  2
 *                  3
 *
 *
 *          4. DECREMENT OPERATOR decreases value by 1.
 */         for(var counter = 3; counter > 0; counter--) {
                console.log(counter);
                };
                
                counter;
/*          Prints 3
 *                 2
 *                 1
 *                 0
 *
 *          5. UNARY NEGATION OPERATOR negates its operand.
 */         console.log(- (10 - 8)); // Prints -2
            

/*      - TERNARY OPERATOR (a ? b: c) is a conditional operator evaluating if
 *          a given operand (condition) is true or false.
 *
 *          TERNARY SYNTAX: (condition ? value if true : value if false)
 */         var age = 18;
            var entersBar = (age >= 21) ? "C'mon in!" : "Scram, kiddo!"; 
            console.log(entersBar); // Prints "Scram, kiddo!"