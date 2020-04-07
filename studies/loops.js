/*
 * LOOPS:
 *
 * 0. Our code reads from top to bottom, however we can control the flow of our
 *    code with loops. Loops tell our code to loop back around and run a 
 *    specific number of times or stop running when a specified condition is met. 
 *
 * 1. TYPES OF LOOPS:
 *
 *    - WHILE LOOPS run while something is true or until the specified
 *      condition is false. Used when we don't know ahead of time how long
 *      to keep the loop running. 
 */             var counter = 6; 
                while(counter >= 0) {
                    console.log(counter);
                    counter--;
                };
/*              Prints 6
 *                     5
 *                     4
 *                     3
 *                     2
 *                     1
 *                     0
 *
 *
 *    - FOR LOOPS run based on specified starting and stopping conditions, and 
 *      a specified increment. 
 *  
 *           1. The STARTING CONDITION tells the loop where to begin.
 *           2. The STOPPING CONDITION tell the loop when to stop running.
 *           3. The INCREMENT specifies how much we will move per iteration.
 *              
 *               Start: 0 
 *               Stop: 8
 */              for(var i = 0; i <= 8; i+=2) { 
                 console.log(i)
                 };
/*               Prints  0
 *                       2
 *                       4
 *                       6
 *                       8
 *            
 *           4. Looping over an ARRAY, forwards and backwards.
 *              
 *              - Looping FORWARDS over an array:
 *
 *               Start: Beginning of the array [0]
 *               Stop: End of the array [4]
 *              
 *               Let's declare and assign an array of strings.
 */              var myArray = ["Let's", "loop", "over", "this", "array"]; 
                 for(var i = 0; i <= 4; i++) {
                 console.log(myArray[i]);
                 };
/*              Prints   "Let's"
 *                       "loop"
 *                       "over"
 *                       "this"
 *                       "array"
 *              
 *              - Looping BACKWARDS over an array.
 *
 *               Start: End of the array [myArray.length - 1]
 *               Stop: Beginning of the array [0]
 *
 *               Let's use the same array as last example.
 */              for(var i = myArray.length - 1; i >= 0; i--) {
                 console.log(myArray[i]);
                 };
/*               Prints  "array"
 *                       "this"
 *                       "over"
 *                       "loop"
 *                       "Let's"
 *
 *
 *     - FOR-IN LOOPS are used to loop over objects by accessing the keys to
 *       see what values are in the object.
 */             var myObject = { // Object declaration and key/value assignments
                fName: "Krissy",
                lName: "Llanos",
                age: 27
                };

                console.log(myObject); // Prints the object

                for(var key in myObject) { // for-in loop declaration
                console.log(key); // Prints the object's keys
                console.log(myObject[key]); // Prints the values in object keys
                };