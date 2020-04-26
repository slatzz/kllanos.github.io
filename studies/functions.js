/*
 * FUNCTIONS:
 *
 * 0. Functions are code written by the programmer that can be reused throughout
 *    the rest of the code to perform certain actions, or functions, upon values
 *    in order to return new values. The main two phases of functions are 
 *    declaring the function by typing the "function" keyword. Second, we call  
 *    or invoke a function using the function name and specified arguments.
 *
 *    NOTE: Functions optionally take inputs and give outputs.
 *
 * 1. CREATING A FUNCTION: FUNCTION SYNTAX AND EXAMPLE
 *
 *    - In our pseudocode, we can outline IOCE: Input, Output, Constraints,
 *      and Edge cases. This is how we specify our inputs and outputs.
 *      For the following example, let's outline the IOCE.
 *
 *      Input: Two numbers. // Datatypes being passed.
 *      Output: The sum of two numbers. // What the function returns.
 *      Constraints: N/A // Specified instructions on how to build function.
 *      Edge cases: N/A // Conditions needed to meet proper output.
 *
 *    - The parts of the function declaration include: the keyword "function",  
 *      function, name, parameters, function body, return statement.
 *
 */   function sum (par1, par2) { /* "function" begins function definition.
 *    Note: exampleF names the function
 *    Note: (par1, par2) sets parameters for the function to be passed later on.
 *          Parameters are separated by commas and placed within parantheses.
 */   return par1 + par2; /* Place code within curly braces. Return statements
 *       are exclusive to functions and tell the input values what to do.
 */     } // Close curly braces
      
      sum(1, 2); /* Prints 3. 
 *       Note: In this example, we are adding together two numbers. Invoke 
 *       function with arguments OUTSIDE of the function. 
 *       Arguments are the values to be passed through the function on which an 
 *       action will be performed. 
 *
 * 2. PARAMETERS VS. ARGUMENTS
 *    
 *    - Parameters are placeholders for the input values we will be using once 
 *      we invoke the function. Arguments are the values that are passed 
 *      through the function once it is invoked.
 *      In the example above, our parameters are set to (par1, par2). The
 *      arguments we pass are (1, 2).
 *
 *
 * 3. FUNCTION EXPRESSION VS FUNCTION DECLARATION
 *
 *     // Function expression:
 *     
 *     functionOne();     
 *      
 *     let functionOne = function() {
 *     console.log("Hello!");
 *     }; // Just an expression. This has not run and does not output anything.
 */      
 
       // Function declaration:
       
       functionTwo();

       function functionTwo() {
       console.log("Hello!");
       } // Prints "Hello!"
 
/*
 *     Create a function that adds two numbers together.
 */    function add(num1, num2) {
       return num1 + num2;
       }
       
//     Invoke the function.
       add(1, 2); // Prints 3
       
//     Assign a function a variable
       var x = function example(str1, str2) {
              return str1 + str2;
       };
              var y = x("Hello ", "World");
              console.log(y); // Prints "Hello World"
//     


/* 4. A FUNCTION'S SCOPE is local to its block of code. Functions can be 
 *    declared anywhere in their scope, and they are available anywhere in
 *    their local scope before or after its declaration. Functions have access
 *    to their parent scopes within their closures. 
 */
       var insideVariable = 20;
       
              function scopeExample() {
                     
              insideVariable = 10;
       }
              console.log(insideVariable);
       
              scopeExample(); // Prints 20 
              
//     But if we log to the console within the scope of the function...
 
       insideVariable = 30;
       
              function anotherScopeExample() {
                     
              insideVariable = 10;
              
              console.log(insideVariable);
       }
       
              anotherScopeExample(); // Prints 10
 
/*     
 *    A CLOSURE is a nested function with access to its parent function's 
 *    variables.
 */    function parentFunc() {
        
       var count = 0;

              function childFunc() {
                     
              count = count + 1;
              return count;
  }
       return childFunc;
}

       var letsCount = parentFunc();
       console.log(letsCount()); // Prints 1
       console.log(letsCount()); // Prints 2
       console.log(letsCount()); // Prints 3
       