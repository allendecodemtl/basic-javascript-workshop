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

function getString(str, num){
    return str.substr(num,1);
}

console.log(getString("Hello", 1));


// 4 Write a function that takes two numbers and adds them together. 
//   Test your function on a few inputs. Write in the comments what happens when you pass something other than a number to your function.

function add (a, b){
    return a + b;
}

console.log(add(4,5));
console.log(add("test")); // returns undefined if passed something other than a number


// 5 Write a function that takes two numbers and multiplies them together. 
//   Test your function on a few inputs. Write in your comments what happens when you pass something other than a number to your function.

function multiply (a, b){
    return a * b;
}

console.log(multiply(4,5));
console.log(add("test")); // returns undefined if passed something other than a number


// 6 Write a function that takes two numbers and a string. If the string is ‘add’, then return the sum of the numbers. If the string is ‘subtract’, return the difference. 
//   If the string is ‘mult’, return the product. If the string is ‘div’, return the ratio. Otherwise return 0.

function mathsMethod(a, b, c){
    if (c === "add"){
        return a + b;
    } else if (c === "substract") {
        return a - b;
    } else if (c === "mult") {
        return a * b;
    } else if (c === "div") {
        return a / b;
    } else {
        return 0;
    }
}

console.log(mathsMethod(12, 4, "add"));
console.log(mathsMethod(12, 4, "substract"));
console.log(mathsMethod(12, 4, "mult"));
console.log(mathsMethod(12, 4, "div"));


// 7 Write a function that takes a string and a number, and returns the string repeated that many number of times. 
//   Test your function with various inputs.
function repeatStr(str, num){
    return str.repeat(num);
}

console.log(repeatStr("Hello",3));


// 8 Write a function that uses a for loop to print the numbers from 1 to 10 inclusively.
function printLoopNum (){
    for (var i=1; i < 11; i++){
        console.log(i);
    }
}

printLoopNum();

// 9 Write a function that uses a for loop to print the numbers from 1 to 10 inclusively, but as words ("one", "two", ...). 
//   As an extra challenge, try to find a solution that does not use an if/else:
function printNumInWords(){
    for (var i=1; i < 11; i++ ){
            switch (i){
            case 1:
                console.log("One");
                break;
            case 2: 
                console.log("Two");
                break;
            case 3: 
                console.log("Three");
                break;
            case 4: 
                console.log("Four");
                break;
            case 5: 
                console.log("Five");
                break;
            case 6: 
                console.log("Six");
                break;
            case 7: 
                console.log("Seven");
                break;
            case 8: 
                console.log("Eight");
                break;
            case 9: 
                console.log("Nine");
                break;
            case 10: 
                console.log("Ten");
                break;
            default:
                console.log("Default");
        }
    }
}

printNumInWords();


// 10 Write a function that uses a for loop to print the numbers from 1 to 10 inclusively, 
//    but for each number, print it that many number of times:

function printManyNumTimes(){
    for (var i=1; i<11; i++){
        for (var j=1; j<=i; j++){
            console.log(i);
        }
    }
}

printManyNumTimes();

// 11 Write a function that takes a string, and returns the reverse of that string. For example, if you pass the function the string “hello”, it should return “olleh”. 
//    Test your function on a few inputs, including the empty string.

function reverseStr (s){
    return s.split("").reverse().join("");
}

console.log(reverseStr("HelloWorld"));


// 12 Write a function that takes a number and returns the factorial of a number. The factorial of 5 is 5x4x3x2x1. 
//    The factorial of 0 is 1. Test your input on a few numbers, including negative numbers.

function factorial(num)
{
    // If the number is less than 0, reject it.
    if (num < 0) {
        return -1;
    }
    // If the number is 0, its factorial is 1.
    else if (num == 0) {
        return 1;
    }
    var tmp = num;
    while (num-- > 2) {
        tmp *= num;
    }
    return tmp;
}

console.log(factorial(8));



// 13 Write a function that takes a phrase as a string, and returns the longest word in that phrase. 
//    If the phrase contains more than one such word, return the first occurrence. Test your function on a few inputs.

function getLongestWord(str){
    return str
    .split(' ')
    .sort(function(a, b) { return a.length-b.length; }) 
    .pop();
}

console.log(getLongestWord("I am testing longest word!"));


// 14 Write a function that takes a phrase, and returns the same phrase with every word capitalized. 
//    For example, if you pass your function "hello world", it should return "Hello World" and 
//    if you pass it "HELLO WORLD" or even "HeLLo WoRLD", it will also return "Hello World". 
//    Test your function of a few inputs.

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log(capitalizeFirstLetter("hello world"));
console.log(capitalizeFirstLetter("HELLO WORLD"));
console.log(capitalizeFirstLetter("HeLLo WoRLD"));


// 15 Write a function that takes an array and returns the largest number of the array. 
//    Test your function on a few inputs.
function largestNumOfArray(array){
    return Math.max.apply(Math, array);
}

console.log(largestNumOfArray([2,33,4,10,100,55]));


// 16 Write a function that takes an array, and returns a filtered array. 
//    The filtered array should only contain the truthy values from the initial array. 
//    Hint: there is an array method called filter that can help you with this :)

function bouncer(arr) {
  return arr.filter(function(v) { return !!v; });
}

console.log(bouncer([true, false, 1, undefined, "string", null]));


// 17 Write a function that takes an array of numbers, and returns the sum of all the numbers in the array.
function amountTotal(amount) {
        var total = 0;
        for (var i = 0; i < amount.length; ++i) {
             total += amount[i]; // add each element in an array to total
        }
        return total;// return sum of elements in array
}

console.log(amountTotal([1,2,3,4,5]));


// 18 Write a function that takes two arrays, and returns an array of all elements that are only in one array. 
//    For example, with [1,2,3] and [1,2,4,5] the function should return [3,4,5]. 
//    Test your function on different inputs. Hint: you should look up array methods indexOf and slice.

function onlyInOneArray(arr1, arr2){
    
    var similar = [];
    var all = arr1.concat(arr2);
    var results = [];
    
    for (var i=0; i<arr1.length; i++){
        for (var j=0; j<arr2.length; j++){
            if (arr1[i] === arr2[j]) {
                //console.log(arr1[i] + " " + arr2[j]);
                similar.push(arr1[i]);
            }
        }
    }
    
    for (var i=0; i<all.length; i++){
        for (var j=0; j<similar.length; j++){
            if (similar.indexOf(all[i]) === -1) {
                console.log(all[i] + " " + similar[j]);
                results.push(all[i]);
            }
        }
    }
    
    
    
}

onlyInOneArray([1,2,3],[1,2,4,5]);





