/* 1) MAX CHAR

Given a string, return the character that is most
commonly used in the string.

--- Examples
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"
*/

console.log("   >> EX1 Advanced << ");
const maxChar = function (mostCharacters) {
  let max = 0;
  let maxString = "";

  mostCharacters.split("").forEach((char) => {
    if (mostCharacters.split(char).length > max) {
      max = mostCharacters.split(char).length;
      maxString = char;
    }
  });
  console.log(maxString);
};

maxChar("abcccccccd");

/* 2) ANAGRAMS

Check to see if two provided strings are anagrams of each other.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case

--- Examples
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False
*/
console.log("   >> EX2 Advanced << ");
const checkAnagrams = function (anagram1, anagram2) {
  if (
    anagram1.split("").sort().join("") === anagram2.split("").sort().join("")
  ) {
    console.log(true);
    return true;
  } else console.log(false);
  return false;
};
checkAnagrams("apple", "appel");

/* 3) ANAGRAMS 2

Given a word and a list of possible anagrams, select the correct sublist.

--- Examples 

    "listen" and a list of candidates like "enlists" "google" "inlets" "banana" 
    the program should return a list containing "inlets".
*/

console.log("   >> EX3 Advanced << ");
const listAnagrams = function (wordA, arrayA) {
  let arrayOfAnagrams = [];
  arrayA.forEach((word) => {
    if (checkAnagrams(wordA, word)) {
      arrayOfAnagrams.push(word);
    }
  });
  console.log(arrayOfAnagrams);
};
listAnagrams("listen", ["inlets", "enlists"]);

/* 4) PALINDROME

Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. Do include spaces
and punctuation in determining if the string is a palindrome.

--- Examples:

    palindrome("abba") === true
    palindrome("abcdefg") === false
 */
console.log("   >> EX4 Advanced << ");
const isPalindrome = function (palindrome1, palindrome2) {
  if (
    palindrome1.split(" ").join("").split("").reverse().join("") ===
    palindrome2.split(" ").join("")
  ) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};
isPalindrome("abbca abba", "abba acbba");
/* 5) REVERSE INT

Given an integer, return an integer that is the reverse
ordering of numbers.

--- Examples

    reverseInt(15) === 51
    reverseInt(981) === 189
    reverseInt(500) === 5
    reverseInt(-15) === -51
    reverseInt(-90) === -9
 */
console.log("   >> EX5 Advanced << ");
const reverseInteger = function (integerR) {
  if (Number.isInteger(integerR)) {
    console.log(
      parseFloat(integerR.toString().split("").reverse().join("")) *
        Math.sign(integerR)
    );
    return parseFloat(
      integerR.toString().split("").reverse().join("") * Math.sign(integerR)
    );
  }
};
reverseInteger(-135);
/* 6) STEPS

Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!

--- Examples

    steps(2)
        '# '
        '##'
    steps(3)
        '#  '
        '## '
        '###'
    steps(4)
        '#   '
        '##  '
        '### '
        '####' */
console.log("   >> EX6 Advanced << ");
const makeSteps = function (N) {
  for (i = 0; i < N; i++) {
    let step = "";
    for (j = 0; j < N; j++) {
      if (j <= i) {
        step += "#";
      } else {
        step += " ";
      }
    }
    console.log("'" + step + "'");
  }
};
makeSteps(4);
/* 7) REVERSE STRING

Given a string, return a new string with the reversed
order of characters

--- Examples

    reverse('apple') === 'leppa'
    reverse('hello') === 'olleh'
    reverse('Greetings!') === '!sgniteerG'
 */
console.log("   >> EX7 Advanced << ");
const reverseString = function (stringRev) {
  stringRev.split("").reverse().join("");
  console.log(stringRev.split("").reverse().join(""));
};
reverseString("Hello!");
/* 8) CHUNK

Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size

--- Examples

    chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
    chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
    chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
    chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
    chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/
console.log("   >> EX8 Advanced << ");
const divideSubarrays = function (arrayD, D) {
  let i = 0;
  let arrayDNew = [];
  while (i < arrayD.length) {
    arrayDNew.push(arrayD.splice(i, D));
  }
  console.log(arrayDNew);
};
divideSubarrays([2, 4, 7, 6, 8, 9, 3, 10], 3);
/* 9) PYRAMID

Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left and right hand sides

--- Examples

    pyramid(1)
        '#'
    pyramid(2)
        ' # '
        '###'
    pyramid(3)
        '  #  '
        ' ### '
        '#####' */
console.log("   >> EX9 Advanced << ");
const makePyramid = function (numberN) {
  let hash = "#";
  let space = " ";
  let pyramid = "";
  let pyramidSpace = " ";
  for (i = 0; i < numberN; i++) {
    pyramid = hash.repeat(2 * i + 1);
    pyramidSpace = space.repeat(numberN - i - 1);
    console.log(pyramidSpace + pyramid);
  }
};
makePyramid(4);
/* 10) SPYRAL MATRIX

Write a function that accepts an integer N
and returns a NxN spiral matrix.

--- Examples

    matrix(2)
        [[1, 2],
        [4, 3]]
    matrix(3)
        [[1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]]
    matrix(4)
        [[1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10,  9,  8, 7]]

*/
console.log("   >> EX10 Advanced << ");
const makeSpiralMatrix = function (intSM) {
  let mainArraySM = [];
  for (i = 0; i < intSM; i++) {
    mainArraySM.push([]);
  }
  //console.log(mainArraySM);

  let counter = 1;
  let startRow = 0;
  let endRow = intSM - 1;
  let startColumn = 0;
  let endColumn = intSM - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    //top start row
    for (let i = startColumn; i <= endColumn; i++) {
      mainArraySM[startRow][i] = counter;
      counter++;      
    } 
    startRow++;
    
    //right end column
    for (let i = startRow; i <= endRow; i++) {
      mainArraySM[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    //bottom end row
    for (let i = endColumn; i >= startColumn; i--) {
      mainArraySM[endRow][i] = counter;
      counter++;
    }
    endRow--;

    //left start column
    for (let i = endRow; i >= startRow; i--) {
      mainArraySM[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
  //console.log(mainArraySM)
  return mainArraySM
};
console.log(makeSpiralMatrix(4));