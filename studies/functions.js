/*
 * FUNCTIONS:
 *
 * 0. Functions are code written by the programmer that can be reused throughout
 *    the rest of the code to perform certain actions, or functions, upon values
 *    in order to return new values. The main two phases of functions are 
 *    declaring the function by typing the "function" keyword. Second, we call  
 *    or invoke a function using the function name and specified arguments.
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
 */     }; // Close curly braces
      
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
 * 3. ASSIGNING FUNCTIONS TO VARIABLES 
 *
 *   - We can assign functions to variables just as we assign other datatypes
 *     to variables using the assignment operator, "=".
 *
 *     Let's practice assigning a function to a variable.
 *
 *     Create a function that adds two numbers together.
 */    function sum(num1, num2) {
       return num1 + num2;
       };
       
//     Invoke the function.
       sum(1, 2); // Prints 3
       
//     Declare a variable and assign it to the function       
       var assignFunctionToVar = sum(1, 2);

//     Console.log the new variable and pass 100 through the function.
       console.log(assignFunctionToVar + 100); // Prints 103


/* 4. A FUNCTION'S SCOPE is local to its block of code. Functions can be 
 *    declared anywhere in their scope, and they are available anywhere in
 *    their local scope before or after its declaration. Functions have access
 *    to their parent scopes within their closures. Closures are identified by
 *    the curly braces surrounding a functions' data. Data from these various
 *    closures are available to the function and can be referenced throughout
 *    the code.
 */