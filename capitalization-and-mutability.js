/* Exercise: 
Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty. 

Function provided:
function capitalizeWord(word) {
  word[0].toUpperCase();
  return word;
}*/

/* There are numerous ways to solve this problem, several of which are demonstrated below. */




// Solution 1: For Loop

function capitalizeWordOne(str) {
    let capitalizedWord = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        capitalizedWord += str[i];        
    }
    return capitalizedWord;
}




// Solution 2: Utilizing charAt() And Slice

function capitalizeWordTwo(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/* Notes: A String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string, thereafter the toUpperCase method can be used to convert the new string's value to uppercase.

This new string is then combined with a second string that is gets created using the slice() method, which allows us to extract the remainder of the original string beginning at the second letter. */