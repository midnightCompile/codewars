/* Exercise: Complete the solution so that it reverses the string value passed into it. */

/* There are numerous ways to solve this problem, several of which are demonstrated below. */




// Solution 1: For Loop

function reverseWStringOne(str) {
    let reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];        
    }
    return reversed;
}

/* ES6 allows the above function to be cleaned up using for...of syntax */ 

// Solution 1A: For...Of Loop

function reverseStringOneA(str) {
    let reversed = "";
    for(let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}




// Solution 2: Utilizing reverse()

function reverseStringTwo(str) {
    return str.split("").reverse().join("");
}

/* Notes: the reverse() method only works for arrays in JS, so utilizing this method requires we: first break the string apart using the split() method, separating on ""; second, use reverse() to reverse the order of the array elements; lastly, we need to recombine all of the pieces of the array into a string again using the array method, join(), and using "" as a separtor. */




// Solution 3: ES 6 Spread Syntax

function reverseStringThree(str) {
    return [...str].reverse().join("");
}

/* Notes: Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

By putting the string that is passed into the function within an array, the reverse() and join() methods may be used, as in Solution 2. */




// Solution 4: Utilizing reduce()

function reverseStringFour(str) {
    return str.split(" ").reduce((rev, char) => char + rev);
}

/* Notes: reduce() is another JS array method, which again requires the string be split on "" to collect the words within an empty string, which later becomes a reverse of the original string.

This function also employs ES6 arrow function syntax, allowing for concise code with the implied return. */




// Solution 5: Recursion

function reverseStringFive(str) {
    if (str === "") {
        return str;
    } else {
        return reverseString5(str.substr(1)) + str[0];
    }    
}

/* Notes: This approach forces the function to call itself string.length times until hitting the base case (an empty string), using the substr() to remove the 1st character in the string and then adding it to the end of the string.

This could be further improved via refactoring, as below. */

function reverseStringFiveA(str) {
    return str ? reverse(str.substr(1)) + str[0] : str
}

/* Ternary (Conditional) Operator: variablename = (condition) ? value1:value2

This operator assigns a value to a variable based on a condition. */