/* This challenge is designed to test you knowledge of Types and Control Flow (If and Switch Statements) */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/* Foundation Challenges */

/**
 * A function that programmatically concatenates two strings together with a space in between them.
 * This means if the string were different it would still add them together.
 *
 * @returns {string} John Smith
 */
const firstName = "John";
const lastName = "Smith";

export const createFullName = () => {
  return firstName + " " + lastName;

  // also can use`${fn} ${ln}` 
};

/**
 * A function that programmatically returns the largest number.
 * This means if the numbers were different it would still return the largest one.
 *
 * @returns {number} the largest number
 */
const largeNumber1 = 100;
const largeNumber2 = 200;

export const findLargestNumber = () => {
  if (largeNumber1 > largeNumber2) {
    return largeNumber1;
  } else {
    return largeNumber2;
  }
};

// can use Math.max(l1,l2)
// also can use ternary  l1 > l2 ? l1 : l2

/**
 * A function that programmatically adds two numbers together.
 * This means if the numbers were different it would still add them together.
 *
 * @returns {number} the sum of both numbers
 */
const addNumber1 = 12;
const addNumber2 = 24;

export const addNumbers = () => {
  return addNumber1 + addNumber2;
};

/* Intermediate Challenges */

/**
 * A function to programmatically find the length of a string.
 * This means if the string was different it would still find the length.
 *
 * @returns {number} the length of the string
 */
const password = "thisIsMyVeryLongPassword123456789";

export const findLengthOfPassword = () => {
  return password.length;
};

/**
 * A function that programmatically tells you what the type of the variable is.
 * This variable was still one of the accepted types it would still output a string.
 * If the variable is a string output "This is a string"
 * If the variable is a number output "This is a number"
 * If the variable is a boolean output "This is a boolean"
 * If the variable is not any of those types output "I don't know what this thing is"
 *
 * @returns {string} This is a string
 */
const thing = "I am a thing";

export const findType = () => {
  if (typeof thing === "string") {
    return "This is a string";
  } else if (typeof thing === "number") {
    return "This is a number";
  } else if (typeof thing === "boolean") {
    return "This is a boolean";
  } else {
    return "I dont know what this thing is"
  }
};

//can also use switch statement 

/**
 * A function to programmatically decide if a name is suitable for a name tag.
 * This means it must still work even if the name is different and return something if name provided is incorrect.
 * Name tag rules are: The name must be less than or equal to 8 characters and begin with a capital letter.
 *
 * @returns {boolean} true || false
 */
const nameTagOption = "Timothy";

export const getIsValidOnNameTag = () => {
  let regex = /[A-Z]/;
  if (regex.test(nameTagOption[0]) && nameTagOption.length <= 8) {
    return true;
  } else {
    return false;
  }
};

//can also do regex as /[A-Z].*/ and remove [0] and tests on whole word as .* means capital followed by letters
//also no need for if/statement as required return boolean => so can just return the regexx formula and will show true/false
//can also use charCodeAt(passing in A=65 / Z=90)

/* Advanced Challenges */

/**
 * A function that programmatically converts a number stored as a string to a number type.
 * This means if the string was different it would still convert it to a number.
 *
 * @returns {number} The number converted from the string "32.87" -> 32.87
 */
const stringToConvert = "14.45";

export const convertStringToNumber = () => {
  return parseFloat(stringToConvert);
};

// can also use Number and not parseFloat

/**
 * A function that uses regex to programmatically test if a string contains uppercase letters.
 * This means if the string was different it would still accurately return true or false.
 *
 * !!NOTE!! You should use regex to solve this problem!
 *
 * @returns {boolean} true || false
 */
const stringWithUppercaseLetters = "I Am A String With Uppercase Letters";

export const getHasUppercaseLetters = () => {
  let capital = /[A-Z]/;
  return capital.test(stringWithUppercaseLetters);
};


/* Expert Challenge */

/**
 * A function that programmatically converts a string written in PascalCase to a string written in snake_case (lowercase with underscores).
 * This means if the PascalCase string changes then the function should still convert it.
 *
 * @returns {string} i_want_to_be_snake_case
 */
const pascalCaseVariableName = "IWantToBeSnakeCase";

export const convertPascalCaseToSnakeCase = () => {
  let firstChar = pascalCaseVariableName.slice(0, 1);
  let slicePascal = pascalCaseVariableName.slice(1);
  let regex = /([A-Z])/g;
  let capitalLetters = slicePascal.replace(regex, '_$1').trim();
  let final = firstChar.concat(capitalLetters)
  return final.toLowerCase();
}

// can use .split(/(?=[A-Z])/) then apply .join()
// also for loop with charCodeAt