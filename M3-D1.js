/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, 
then returns triple their sum.
*/

console.log("   >> EX1 << ");
const sumTwoIntegers = function (integer1, integer2) {
  let sum = integer1 + integer2;
  if (integer1 === integer2) {
    console.log(3 * sum);
    return 3 * sum;
  }
  console.log(sum);
  return sum;
};
sumTwoIntegers(2, 2);

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

console.log("   >> EX2 << ");
const checkTwoNumbers = function (number1, number2) {
  let sumN = number1 + number2;
  if (number1 === 50 || number2 === 50 || sumN === 50) {
    console.log(true);
    return true;
  }
  console.log(false);
  return false;
};
checkTwoNumbers(50, 3);

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
console.log("   >> EX3 << ");
const removeACharacter = function (aString, position) {
  for (i = 0; i < aString.length; i++) {
    if (i === position) {
      console.log(aString.replace("i", ""));
      return aString.replace("i", "");
    }
  }
};
removeACharacter("strive", 2);
/*

4)
 Create a function to find the largest of three given integers.
*/
console.log("   >> EX4 << ");
const findLargestOfThree = function (int1, int2, int3) {
  if (int1 > int2 && int1 > int3) {
    console.log(int1);
    return int1;
  } else if (int2 > int1 && int2 > int3) {
    console.log(int2);
    return int2;
  } else {
    console.log(int3);
    return int3;
  }
};
findLargestOfThree(4, 2, 3);

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
console.log("   >> EX5 << ");

const checkTwoNumbersRange = function (range1, range2) {
  if (
    (range1 > 40 && range1 < 60) ||
    (range1 >= 70 && range1 <= 100) ||
    (range2 > 40 && range2 < 60) ||
    (range2 >= 70 && range2 <= 100)
  ) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};
checkTwoNumbersRange(41, 42);

/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/
console.log("   >> EX6 << ");
const createNewString = function (givenString, numberOfCopies) {
  let newString = "";
  for (i = 0; i < numberOfCopies; i++) {
    newString += givenString;
  }
  console.log(newString);
};
createNewString("Strive school", 4);
/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
console.log("   >> EX7 << ");
const displayCity = function (cString) {
  if (
    cString.startsWith("Los") === true ||
    cString.startsWith("New") === true
  ) {
    console.log(cString);
    return cString;
  } else {
    console.log("blank");
    return "blank";
  }
};
displayCity("Los Angeles");
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
console.log("   >> EX8 << ");
const calculateSum = function (array3) {
  let sum = array3[0] + array3[1] + array3[2];
  console.log(sum);
  return sum;
};
calculateSum([1, 2, 3]);
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
console.log("   >> EX9 << ");
const testArray = function (arrayInt) {
  if (
    arrayInt[0] === 1 ||
    arrayInt[0] === 3 ||
    arrayInt[1] === 1 ||
    arrayInt[1] === 3
  ) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};

testArray([2, 3]);
/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/
console.log("   >> EX10 << ");
const testArrayNot = function (arrayIntNot) {
  if (
    arrayIntNot[0] !== 1 ||
    arrayIntNot[0] !== 3 ||
    arrayIntNot[1] !== 1 ||
    arrayIntNot[1] !== 3
  ) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};
testArrayNot([2, 5]);

/*
11)

Create a function to find the longest string from a given array of strings.
*/
console.log("   >> EX11 << ");
const findLongestStringInArray = function (stringsArray) {
  let lengthArray = [];
  for (i = 0; i < stringsArray.length; i++) {
    let stringLength = stringsArray[i].length;
    lengthArray.push(stringLength);
  }
  lengthArray.sort(function (a, b) {
    return a - b;
  });
  console.log(lengthArray[lengthArray.length - 1]);
};
findLongestStringInArray(["strive school", "school", "batch"]);
/*
12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
    */
console.log("   >> EX12 << ");
const findAngleType = function (angle) {
  if (angle >= 0 && angle < 90) {
    console.log("acute");
    return "acute";
  } else if (angle === 90) {
    console.log("right");
    return "right";
  } else if (angle > 90 && angle < 180) {
    console.log("btuse");
    return "btuse";
  } else if (angle === 180) {
    console.log("straight");
    return "straight";
  }
};
findAngleType(180);
/*
13)

Create a function to find the index of the greatest element of a given array of integers
*/
console.log("   >> EX13 << ");
const findGreatestIndex = function (arrayOfIntegers) {
  let max = arrayOfIntegers[0];
  let maxIndex = 0;
  for (i = 0; i < arrayOfIntegers.length; i++) {
    if (arrayOfIntegers[i] > max) {
      maxIndex = i;
    }
  }
  console.log(maxIndex);
  return maxIndex;
};
findGreatestIndex([1, 34, 5, 32]);
/*
14)

Create a function to get the largest even number from an array of integers.
*/
console.log("   >> EX14 << ");
const getLargestEvenNumber = function (arrayOfI) {
  let maxNumber = arrayOfI[0];
  for (i = 0; i < arrayOfI.length; i++) {
    if (arrayOfI[i] % 2 === 0 && arrayOfI[i] > maxNumber) {
      maxNumber = arrayOfI[i];
    }
  }
  console.log(maxNumber);
  return maxNumber;
};
getLargestEvenNumber([2, 3, 4, 8, 0]);
/*
15)

Create a function to check from two given integers, whether one is positive and another one is negative.
*/
console.log("   >> EX15 << ");
const checkTwoIntegers = function (a, b) {
  if ((a > 0 && b < 0) || (a < 0 && b > 0)) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};
checkTwoIntegers(-2, 2);
/*
16)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. 
If the string length is less than 3 convert all the characters in upper case. 
*/
console.log("   >> EX16 << ");
const createNewString3 = function (string3) {
  let newString3 = "";
  if (string3.length < 3) {
    newString3 = string3.toUpperCase();
  } else {
    newString3 =
      string3.substring(0, 3).toLowerCase() +
      string3.substring(3).toUpperCase();
  }
  console.log(newString3);
};
createNewString3("Strive school");
/*
17)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 
return 65 other wise return 80.
*/
console.log("   >> EX17 << ");
const calculateSum2 = function (x, y) {
  if (x + y > 50 && x + y < 80) {
    console.log("65");
    return 65;
  }
  console.log("80");
  return 80;
};
calculateSum2(23, 15);

/*

18)

Create a function to convert a number to a string, the contents of which depend on the number's factors. 
Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".
*/

console.log("   >> EX18 << ");
const convertNumberToString = function (number) {
  if (number % 3 === 0) {
    console.log("Diego");
  } else if (number % 5 === 0) {
    console.log("Riccardo");
  } else if (number % 7 === 0) {
    console.log("Stefano");
  } else console.log(number);
};
convertNumberToString(34);

/*
19)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/
console.log("   >> EX19 << ");
const returnAcronym = function (phrase) {
  let words = phrase.split(" ")
  let acronym = ""
  for (i = 0; i < words.length; i++) {
    acronym += words[i].slice(0, 1)
  }
  console.log(acronym)
}
returnAcronym("Strive School")
