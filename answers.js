// 1 Write a function that takes a string and returns the first character of the string. 
//   Test your function on a few inputs, including the empty string.

function getFirstChar (str){
    return str.substring(0,1);
}

console.log(getFirstChar("Hello"));


// 2 Write a function that takes a string and returns the last character of a string. 
//   Test your function on a few inputs, including the empty string.

function getLastChar(str){
    return str.substring(str.length-1);
}

console.log(getLastChar("Hello"));

// 3 Write a function that takes a string and a number, and returns the character at the position represented by the number. 
//   The indexing of number should start at 0. Test your function on a few inputs, including the empty string.

