const log = console.log;

//** Reverse a string
const inputString = 'Ajay';

const reverseString = (input) => {
  return input.split('').reverse().join('');
};

const reversedString = reverseString(inputString);

// console.log(reversedString);

//** Palindrome
const inputString1 = 'a';

const checkPalindrome = (input) => {
  return input.split('').reverse().join('') === inputString1;
};

const isPalindrome = checkPalindrome(inputString1);

//console.log(isPalindrome);

//** Find Max
const inputValue2 = [2, 34, 5, 67, 89, 90];

const findMaxNumber = () => {
  // return Math.max(...inputString2);

  return inputValue2.reduce((acc, curr) => {
    if (curr > acc) {
      acc = curr;
    }

    return acc;
  }, 0);
};

const maxNumber = findMaxNumber();

// console.log(maxNumber);

//** Find sum of all
const inputValue3 = [4, 4, 67, 54, 5, 10];

const calculateSum = () => {
  return inputValue3.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
};

const sumValue = calculateSum();

// console.log(sumValue);

//** Remove duplicates from array
const inputValue4 = [1, 3, 4, 5, 3, 7, 7, 8, 8];

const removeDuplicates = () => {
  return [...new Set(inputValue4)];
};

const nonDuplicatedValues = removeDuplicates();
// console.log(nonDuplicatedValues);

//** Find Factorial of a number
const inputValue5 = 3;

const findFactorial = () => {
  if (inputValue5 === 1) return 1;
  if (inputValue5 === 2) return 2;

  let factorial = 1;
  for (let i = inputValue5; i > 0; i--) {
    factorial = factorial * i;
  }

  return factorial;
};

const factorialNumber = findFactorial();
// console.log(factorialNumber);

//** Check whether Number is a Prime Number
const inputValue6 = 12;

const checkPrimeNumber = () => {
  if (inputValue6 < 2) return false;

  for (let i = 2; i < Math.sqrt(inputValue6); i++) {
    if (inputValue6 % i === 0) {
      return false;
    }
  }

  return true;
};

const isPrimeNumber = checkPrimeNumber();
// log(isPrimeNumber);

//** Sort an array in ascending order
const inputValue7 = [3, 2, 5, 8, 6, 1, 6];

const sortInputInAscendingOrder = () => {
  return inputValue7.sort((a, b) => a - b);
};

const sortedArray = sortInputInAscendingOrder();
log(sortedArray);
