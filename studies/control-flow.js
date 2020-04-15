/*
 * CONTROL FLOW:
 *
 * 0. Code reads from top to bottom in a straight line. However, we
 *    as programmers have the ability to change the flow of the code using
 *    conditional statements: if, else if, and else and the switch keyword.
 *
 *
 * 1. IF STATEMENTS:
 *
 *   - IF STATEMENTS are conditional statements used to direct our code to 
 *     check if a specified condition is true. 
 *     
 *   - The syntax for an if statement is:
 *    if (condition1) { => Place condition1 in parantheses with "{" after.
 *      console.log(output1);
 *     } => Close block with curly brace
 *
 * 2. ELSE IF STATEMENTS:
 *
 *   - After the IF STATEMENT is declared and assigned a condition, we place 
 *     an else if statement specifying another condition to be checked. If 
 *     this statement is true, then the code stops running and prints its
 *     specified output to the console or performs another specified action.
 *      
 *   - Place else if statement after the if statement's closing curly brace:
 *     console.log(output1)
 *     else if (condition2) { => Place curly braces "{" after else if 
 *     statement
 *     console.log(output2); => console.log desired output
 *     }; => Close with };
 *
 *   - NOTE: You can add as many else if statements as conditions you are 
 *     testing for. In sum, you can have multiply else if statements.
 *
 *
 * 3. ELSE STATEMENTS:
 *    
 *   - Once all conditions have been specified with else if statements, you
 *     can use an ELSE STATEMENT for the final condition with the syntax
 *     "else {final output};"
 *
 * 4. PUTTING IT ALL TOGETHER. . .
 *
 *    Let's create an if/else if/else statement that outputs a message to
 *    users based on degrees Fahrenheit.
 *
 *    First, let's declare a variable called "degreesF" and assign it a 
 *    numerical value to represent the temperature outside:
 
 */   var degreesF = 38; 

/*    Next, let's set conditions for our if statement to print a message to the
 *    console if it is true.
 */     
      if (degreesF <= 32) {
      console.log("It's freezing, bundle up!");
      } else if (degreesF >= 33 && degreesF <= 59) {
      console.log("Grab a heavy coat!");
      } else if (degreesF >= 60 && degreesF < 69) {
      console.log("Grab a light jacket!");
      } else {
      console.log("No jacket needed!")
      };
/*    Prints "Grab a heavy coat!"
 *
 *
 * 5. SWITCH
 *   - The SWITCH keyword performs the same actions as IF/ELSE IF/ELSE 
 *     statements by evaluating a value to compare specified cases.
 *
 *   - The syntax:
 *
 *     switch (var): {
 *
 *     case (value):
 *     console.log(output);
 *     break;
 *
 *     case (value):
 *     console.log(output);
 *     break; . . .
 *     
 *     default:
 *     console.log(final output);
 *     break;
 *
 *  - We use switch statements when we are testing single values, such 
 *    as a single Number or String. If/else if/else statements are better 
 *    for testing ranges conditions and boolean values.
 *
 * 6. LET'S PUT IT ALL TOGETHER AGAIN. . .  
 *
 *    Create a switch statement that outputs the cost of produce. First, we 
 *    need to create a variable called produce and assign it to a vegetable.
 */
      var produce = "Broccoli";
      
/*    Next, create the switch statement that evaluates different produce items
 *    and returns their price if they match the input value.
 */
      switch(produce) {
          
        case "Tomato":
        console.log("Tomatoes are $1.29");
        break;
        
        case "Lettuce":
        console.log("Lettuce is $0.99");
        break;
        
        case "Broccoli":
        console.log("Broccoli is $1.99");
        break;
        
        case "Spinach":
        console.log("Spinach is $3.29");
        break;
        
        default:
        console.log("Invalid item");
        break;
      }