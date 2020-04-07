/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use 
 * variables.  Variables are named identifiers that can point to values of a 
 * particular type, like a Number, String, Boolean, Array, Object or another 
 * data-type.  Variables are called so because once created, we can CHANGE 
 * the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or 
 *    alias) for our variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization 
 *    (or assignment).
 *
 *   - The FIRST phase is called DECLARATION:
 */    var myName; /* At the declaration phase, the variable myName is 
 *     undefined because we have NOT initialized it to anything. If we print 
 *     myName to the console, it prints undefined.
 */    console.log(myName); // Prints undefined
 
/*  - The SECOND phase is INITIALIZATION or ASSIGNMENT:
 */    myName = "John"; // Let's console.log myName again.
       console.log(myName); // Prints "John"

// 3. To reassign a variable, we use the ASSIGNMENT OPERATOR, "=".
      myName = "Bob";
      console.log(myName); // Prints "Bob"
      
/*    NOTE: We can assign and re-assign anything to a variable - we cannot do 
 *    this with constants:
 *
 */   var myVariable = 1;
      var myVariable = true;
      myVariable = "someString";
/*      
 * 4. MORE ON VAR
 *   - Var statements are globally scoped and can be accessed througout the 
 *     code. However, they are only bound to function scopes. They do not have
 *     to be intialized upon declaration. 
 *
 * 
 * CONST
 *
 * 0. Const is a new type of variable, or binding, introduced in ES6. Const
 *   is used to create a variable similarly to var, however one major 
 *   difference between var and const is that const cannot be reassigned.
 */
     const cannotBeReassigned = "I cannot be reassigned.";
     console.log(cannotBeReassigned) // Prints "I cannot be reassigned."
     
/*   Let's see what happens when we try to reassign our variable.
 *   const cannotBeReassigned = "Will this print?"; results in "Parsing
 *   error: Identifier cannotBeReassigned has already been declared."
     
 * 1. MORE ON CONST
 *   - Const statements are block-scoped and must be intialized upon their
 *     declaration. Const cannot be accessed before they are declared.
 *     
 *
 * LET
 * 
 * 0. Let is another new variable, or binding, introduced in ES6. Once a let 
 *    statement is defined, its name can be used as an expression.
 *
 */   let example = "This is an example ";
      console.log(example + "of a let statement.");
 //   Prints "This is an example of a let statement."
 
     let addLet = 9;
     console.log(addLet + addLet); // Prints 18
     
/* 1. Let can be reassigned like var. 
 *    Let's reassign a let statement called reassignLet
 */   let reassignLet = "I can be changed.";
      console.log(reassignLet);
      
      reassignLet = "I changed!"; // Let will not be reassigned if you redeclare
      console.log(reassignLet); // Prints "I changed!"
      
/* 2. MORE ON LET
 *   - Let statements are hoisted to the top of their scope. They
 *     are not accessible in the code until the interpreter reaches
 *     the line where let is declared.
 */