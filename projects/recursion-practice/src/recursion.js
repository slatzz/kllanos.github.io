// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  
    // Base case
      // Stop recurring and return 1 when n === 0
    if(n === 0) {
      
      return 1;
    // Return null if n is a negative integer
    } else if (n < 0) {
      
        return null;
    } 
      
    // Recursive case
    return n * factorial(n - 1);
  
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  
    /** When the array is empty, return 0
     *
     * While there are elements in the array, add the first element of the
     * array to the sum function, slicing off the first element after the
     * two values are summed together
     */ 
   return array.length === 0 ? 0 : array[0] + sum(array.slice(1));
   
};


// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {};
////////////////////////////
///////////////////////////
//xxxxxxxxxxxxxxxxxxxxxxxxxx
// 4. Check if a number is even.
var isEven = function(n) {
  
  // Base case: If n is true, return true
  if(n == 0) {
    
    return true;
    // If n is odd, return false (it is not even)
  } else if(n === 1) {
    
    return false;
    
  } else if(n < 0) {
    // For negative integers, use the decrement operator on n
    return isEven(-n);

  } else {
  // Else, subtract n from 2
  return isEven(n - 2);
  
  }
  
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  // Establish a base case
  // Return 0 when n = 0
  if(n === 0){
    
      return 0; 
  }
  // Establish a recursive case 
  if(n > 0){
    // When n is a positive integer, save n - 1
    return n - 1 + sumBelow(n - 1) ;  
   // If n is a negative integer, return the following recursive function   
  } else if( n < 0){
  
    return n + 1 + sumBelow(n + 1); 
  
  }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
    
    // Create a variable and assign it to an array literal
    let rangeArr = [];
    
    // Determine if integers are positive or negative
    let step = x > y ? -1 : 1; 
      
      // Base case
      // When range has reached its end, stop recursing
      if(x === y) {
        
        return rangeArr;
        
      } else if(x === y - step) {
        
        return rangeArr;
        
      } /** Recursive case: While x and y are not equal, print numbers within
          * their range in a new array
          */ 
        return rangeArr.concat(x + step, range(x + step, y));
      
};
  

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  
  // Base case: Stop recurring when exponent === 0
  //  base case
    if(exp === 0) {
      
      return 1;
      // Account for negative integers
    } else if(exp < 0) {
      
      return 1/ exponent(base, -exp);
      
    } else {// Recursive case
        // Keep finding the exponents while the exponent is not equal to 0
        return base * exponent(base, exp - 1);
    } 
  
};
// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  
    /** Base case: if n === 1, return true;
     * 
     *  Recursive case: while n < 1 and not a power of Two, run the function
     *  until n === 1
     */ 
     return n == 1 ? true : (n < 1 ? false : powerOfTwo(n / 2)); 
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  
  // Base case
    // When string is empty, stop recursing and return empty string
    if (string === "") {
      
        return "";
        
    } else { /** Recursive case: Add the 1st character to back of string
               * until base case is met
               */ 
        return reverse(string.substr(1)) + string.charAt(0);
    }
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  
  let newStr = string.toLowerCase().split(" ");
  let newerStr = newStr.join("");
  
  // Base case:
    // When the string length is 0 or 1, return true
  if(newerStr.length <= 1) {
    
    return true;
  } /** Recursive case:
   * 
   * Recurse while the first element in string is equal to the last element
   * in the string
   */ 
    if(newerStr.charAt(0) !== newerStr.charAt(newerStr.length - 1)) {
        return false;
    }
    // Return true or false
    return palindrome(newerStr.substr(1, newerStr.length - 2));

};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};//xxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxx
// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.

// *** PSEUDOCODE BELOW FUNCTION ***

var multiply = function(x, y) {

  if(x === 0 || y === 0) {
    
    return 0;
  } 
  if(x < 0) {
    
    return -multiply(-x, y);
  }
  
  if(y < 0) {
    
    return -multiply(x, -y);
  }
    return x + multiply(x, y - 1);
};

  // Base case:
    // Return 0 if both numbers are 0
  // Recursive case
    // Adjust function for negative integers
    // Return final product for positive integers

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};//xxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxx
// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
//xxxxxxxxxxxxxxxxxxxxxxxxxxx
};//xxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxx
// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
    // Base case
      // When the strings are empty or first letters are the same, return true
    if (str1.length === 0 && str2.length === 0) {
        if (str1[0] === str2[0]) {
            return true;
        }
    } // Recursive case
        // Compare the first elements in strings 
    if (str1[0] === str2[0]) {
        return compareStr(str1.slice(1), str2.slice(1));
    }/** If first elements in strings do no match as the function recurses, 
       * return false
       */ 
    if (str1[0] !== str2[0]) {
        return false;
    }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  
  // Base case
    // Return empty array when there are no more elements in string
  if(!str.length) {

    return [];
  } // Recursive case: Add the elements of string to new array as it recurses
  return [str[0]].concat(createArray(str.slice(1)));

};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  
  // Create a new variable and assign to an array literal
  let revArray = [];

  // Base case:
    // When the array is empty, return an array literal
  if(!array.length) {
    
    return [];
  } // Recursive case: Add the first element of array to back as it recurses
  return revArray.concat(reverseArr(array.slice(1)), array[0]);

};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  
  // Base case:
    // If length is 0, return an empty array
  if(length === 0) {
    
    return [];
  } // Recursive case:
      // Otherwise, add the new elements 
  return [value].concat(buildList(value, length - 1));
  
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  
  // Base case:
    // Return 0 when the array is empty
  if(!array.length) {
    
    return 0;
  }
  // Recursive case:
    // Count as the first element matches the given value
  if(array[0] === value) {
    
    return 1 + countOccurrence(array.slice(1), value);
    
  } else {
    // Otherwise return the number of occurrences
    return countOccurrence(array.slice(1), value);
    }
  
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  
  // Base case:
    // Return empty array with length is 0
  if(!array.length) {
    
    return [];
  } // Recursive case:
      // Call function over each element and push results into new array
    return [callback(array[0])].concat(rMap(array.slice(1), callback));
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};//xxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};//xxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};//xxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};//xxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  
  // Base case:
    // If the given index is a negative integer, return null
  if(n < 0) {
    
    return null;
  // Recursive case:
    // Return the number at the given index if n is 1 or 0
  } else if(n === 1 || n === 0) {
    
    return n;
  }
  // Return the Fibonacci number
  return nthFibo(n - 1) + nthFibo(n - 2);
  
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  
  // Base case:
    // Return empty array with input array length = 0
  if(!input.length) {
    return [];
  }
    // Capitalize each 1st element in input array as they are added to new array
    return [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  
  // Base case:
    // If array length is 0, return empty array
  if(!array.length) {
    
    return [];
  } // Recursive case
      // Capitalize the first letter of each word 
    return [array[0].charAt(0).toUpperCase() + array[0].substr(1).split(" ")]
    .concat(capitalizeFirst(array.slice(1)));
  
  
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};//xxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxx
// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};//xxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxx
// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
  
  // Base case:
    // Return object when string length is 0
  if(!str.length) {
    
    return obj;
  } // Recursive case:
      // Add letter count to new object as the function recurses through string
  obj[str[0]] ? obj[str[0]]++ : obj[str[0]] = 1;
  
  return letterTally(str.slice(1), obj);
  
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  
  // Create a new variabe and assign it to an array literal
  let newArr = [];
  
  // Base case:
    // Return an empty array if the list length is 0
  if(!list.length) {
    
    return newArr;
  }
  
  // Recursive case:
    // Push into new array if first element does not match the second element
  if(list[0] !== list[1]) {
    
    newArr.push(list[0]);
    
  } // Return new array with no consecutive duplicate digits
    return newArr.concat(compress(list.slice(1)));
    
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};//xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, minZeroArr = []) {

  // Base case
    // Return empty array with array length is 0
  if(!array.length) {
    
    return minZeroArr;
    
  }
  // Recursive case:
    // If the first element in array is not 0, push into new array
  if(array[0] !== 0) {
    
    minZeroArr.push(array[0]);
    
    return minimizeZeroes(array.slice(1), minZeroArr);
    
  } // If the first and second element are not equal, push first element into array
  if(array[0] !== array[1]) {
    
  minZeroArr.push(array[0]);
  
  return minimizeZeroes(array.slice(1), minZeroArr);
  }
  // Return updated array
  return minimizeZeroes(array.slice(1), minZeroArr);
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  
  // Base case:
    // Return empty array when array length is 0
    if(!array.length) {
      return [];
    } // Recursive case:
    // If first element of array is negative, convert to positive integer
    if(array[0] < 0) {
      array[0] = -array[0];
    } 
    // If second element of array is positive, convert to negative integer
    if(array[1] > 0) {
      array[1] = -array[1];
    }
    // Return the new array with new numbers
    return[array[0], array[1]].concat(alternateSign(array.slice(2)));
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  
  // Base case
    // Return empty string when string length is 0
  if(!str.length) {
    return "";
  } // Recursive case
      /** Check if first letter in string matches a stringed number and replace
       * with the number spelled out in a string
       */ 
  if(str[0] === "0") {
    return "zero" + numToText(str.slice(1));
  } else if(str[0] === "1") {
    return "one" + numToText(str.slice(1));
  } else if(str[0] === "2") {
    return "two" + numToText(str.slice(1));
  } else if(str[0] === "3") {
    return "three" + numToText(str.slice(1));
  } else if(str[0] === "4") {
    return "four" + numToText(str.slice(1));
  } else if(str[0] === "5") {
    return "five" + numToText(str.slice(1));
  } else if(str[0] === "6") {
    return "six" + numToText(str.slice(1));
  } else if(str[0] === "7") {
    return "seven" + numToText(str.slice(1));
  } else if(str[0] === "8") {
    return "eight" + numToText(str.slice(1));
  } else if(str[0] === "9") {
    return "nine" + numToText(str.slice(1));
  }
  
  // Join the words together and return the new string
  return [str[0]].concat(numToText(str.slice(1))).join("");
  
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
  
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
