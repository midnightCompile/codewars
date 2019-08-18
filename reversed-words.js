/* Exercise: Complete the solution so that it reverses all of the words within the string passed in. */

/* There are numerous ways to solve this problem, a couple of which are demonstrated below. 

Assumptions: All provided solutions assume words within the string being passed in will be separated by a single space. */




// Solution 1: For Loop

function reverseWordsOne(str) {
    let reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
        if (i != str.length - 1) {
            reversed.push(" ");
        }
    }
    return reversed;
}




// Solution 2: Utilizing reverse()

function reverseWords2(str) {
    return str.split(" ").reverse().join(" ");
}

/* Notes: the reverse() method only works for arrays in JS, so utilizing this method requires we: first break the string apart using the split() method, separating on " "; second, use reverse() to reverse the order of the array elements; lastly, we need to recombine all of the pieces of the array into a string again using the array method, join(), and using " " as a separtor. */