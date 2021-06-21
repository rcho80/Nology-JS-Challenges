/* JS3 builds on the previous challenges and adds the use of Arrays, For Loops, Conditionals (If, else, switch)
 *  & calling your own functions.
 */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/**
 * Foundation Challenges
 */

/**
 * A function that creates a a Recipe string from a given array of Ingredients.
 * Each ingredient will be joined with a +.
 *
 * @param {string[]} ingredientsArr ["Bacon","Lettuce","Tomato"]
 * @return {string} "Bacon+Lettuce+Tomato"
 */

export const createRecipeString = (ingredientsArr) => {
  return ingredientsArr.join('+');
};

// other option:
// let string = ingredientsArr[0];
// for (let i = 1; i < ingredientsArr.length; i++) {
//   string += `+${ingredientsArr[i]}`
// }
// return string; 
// }


/**
 * A function that takes Array of Items and returns a NEW ARRAY with the first and last item in it.
 *
 * @param {string[]} itemsArr ["Tony","John","Dave"]
 * @return {string[]} ["Tony","Dave"]
 */

export const getFirstAndLastItems = (itemsArr) => {
  return [itemsArr[0], itemsArr[itemsArr.length - 1]];
}

//other options work but are inefficient. Look to minimise lines of code. elegant code
//1)
// const cloneArray = [...itemsArr];
// const list = [];
// const first = cloneArray.shift();
// const last = cloneArray.pop();
// list.push(first, last);
// return list;
//2)
//   const newArray = [...itemsArr];
//   let firstLast = [];
//   const filtered = newArray.filter((item) => {
//     if (item === newArray[0] || item === newArray[newArray.length - 1]) {
//       firstLast.push(item)
//     }
//   })
//   return firstLast;
// };

/**
 * A function that takes an array of scores and totals the scores by looping through the array.
 *
 * @param {number[]} scoreArr [1,2,3]
 * @return {number} 6
 */

export const totalScores = (scoreArr) => {
  let counter = 0;
  for (let i = 0; i < scoreArr.length; i++) {
    counter += scoreArr[i];
  }
  return counter;
};

/**
 * Intermediate Challenges
 */

/**
 * A function that takes an number and returns the total of the range of numbers between 0 and the given number.
 * e.g. 10 => 0+1+2+3+4+5+6+7+8+9+10 = 55.
 *
 * @param {number} rangeMax 10
 * @return {number} 55
 */

export const totalRange = (rangeMax) => {
  let counter = 0;
  const range = [...Array(rangeMax + 1).keys()];
  for (let i = 0; i < range.length; i++) {
    counter += range[i];
  }
  return counter
};

/*
 can do with while ()
 
*/



/**
 * A function that takes an array and returns a NEW ARRAY where the last item has been moved to the front of the array and removed from the back.
 *
 * @param {string[]} itemsArr ["Tony","John","Dave"]
 * @return {string[]} ["Dave","Tony","John"]
 */

export const moveFirstAndLastItems = (itemsArr) => {
  const cloneArr = [...itemsArr];
  const list = [cloneArr.pop()];

  for (let i = 0; i < cloneArr.length; i++) {
    if (typeof cloneArr[i] === "string") {
      list.push(cloneArr[i]);
    }
  }
  return list;
}



/**
 * Read this article on how to clone an array.
 * https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/
 *
 * From here on you should not be mutating the input array. Clone it first and then mutate / manipulate.
 */

/**
 * A function that takes an array of numbers and returns a NEW ARRAY with only the odd numbers from the given array. It should not mutate the input array.
 *
 * @param {number[]} numberArr [1,1,8,1,1,8]
 * @return {number[]} [1,1,1,1]
 */

export const removeEvenNumbers = (numberArr) => {
  const oddNumbers = [];
  const cloneNumberArr = [...numberArr];

  cloneNumberArr.filter(function (item) {
    if (item % 2 !== 0) {
      oddNumbers.push(item)
    }
  })
  return oddNumbers;
}

/**
 * Advanced Challenges
 */

/**
 * A function that takes an array of numbers. It returns the average from the given array.
 * The result should rounded up to the nearest decimal place.
 *
 * @param {number[]} numberArr [1,2,3]
 * @return {number} 2
 */

export const generateAverage = (numberArr) => {
  let averages = 0;

  //if numberArr is NaN or not a number, return 0 and exit
  if (numberArr.length === 0) {
    return 0;
  }

  for (let i = 0; i < numberArr.length; i++) {
    averages += numberArr[i];
  }

  const roundUp = Math.round(averages / numberArr.length);
  return roundUp;
}

/*let acc = numberArr[0] || 0;  ==> if not true then its 0
but need to start for loop at i=0

for loop 
numerarr.length
acc += numberArr[i]
return Math.ceil(acc/numberArr.length)


** can also use sum function done earlier totalRange

*/
//   let list = 0;
//   for (let i = 0; i < numberArr.length; i++) {
//     list += numberArr[i];
//   }
//   const roundUp = Math.round(list / numberArr.length)
//   return roundUp;
// }



/**
 * A function that uses a loop to reverse the order of an Array. It should return a NEW ARRAY and not Mutate the orginal array.
 *
 * @param {number[]} toReverseArr [1,2,3]
 * @return {number} [3,2,1]
 */

export const reverseOrder = (toReverseArr) => {
  const cloneArr = [...toReverseArr];
  const container = [];
  for (let i = cloneArr.length - 1; i >= 0; i--) {
    container.push(cloneArr[i]);
  }
  return container;
};

/**
 * Expert Challenges
 */

/**
 * Given two arrays, The first being an array of players and the second being there corresponding score. Loop through them and generate a new array matching the format below.
 *
 * ["P:INDEX PLAYER scored HIGHSCORE","P:INDEX PLAYER scored HIGHSCORE","P:INDEX PLAYER scored HIGHSCORE"]
 *
 * P:INDEX will start from 1. e.g P:1 not P:0
 *
 * If the inputs are not the same size or empty return "invalid inputs"
 *
 * @param {string[]} playersArr ["Tony","John","Dave"]
 * @param {number[]} scoresArr [45,55,66]
 * @return {string[]} ["P:1 Tony scored 45","P:2 John scored 55","P:3 Dave scored 66"]
 */

export const generateHighscores = (playersArr, scoresArr) => {

  let newArray = [];

  if (playersArr.length !== scoresArr.length || playersArr.length === 0) {
    return "invalid inputs"
  }

  for (let i = 0; i < playersArr.length; i++) {
    newArray.push(`P:${i+1} ${playersArr[i]} scored ${scoresArr[i]}`)
  }
  return newArray;
}

//1) do for loop and write string using i in increments where needed
//     if (playersArr.length !== scoresArr.length || playersArr.length < 1 || scoresArr.length < {
//       return 'invalid inputs';
//     } else {  ==> dont need else here as can do without as using return in if box above 
//       console.log(`P:${i} ${playersArr[i]} scored ${scoresArr[j]},`)
//     }
//   }
// }


// const finalScore = [];

// for (let i = 0; i < playersArr.length; i++) {
//   finalScore.push(playersArr[i]);
// }
//   for (let j = 0; j < scoresArr.length; j++) {
//     finalScore.push(scoresArr[j]);
//   }

// console.log(finalScore)


/**
 * A function that takes a string and creates a simple encrypted message.
 *
 * The string will be broken into 3 lists.
 * The first three letters will go into their own list.
 * The next three letters will follow this pattern.
 * Joining the first three letters in each of their list.
 * The rest of the letter's will follow this pattern.
 * Each list will be joined together and returned as an encrypted message.
 *
 * The word "encrypted" would be broken into:
 *
 * e r t
 * n y e
 * c p d
 *
 * and joined together as ert + nye + cpd
 *
 * @param {string} toEncrypt "encrypted"
 * @return {string} "ertnyecpd"
 */

// export const encryptString = (toEncrypt) => {
//   return;
// };
// 0 3 6
// 1 4 7
// 2 5 8
//"encrypted"
//"ertnyecpd"
export const encryptString = (toEncrypt) => {
  const firstLine = []
  const secondLine = []
  const thirdLine = []

  const cloneArr = [...toEncrypt];

  for (let i = 0; i <= cloneArr.length; i += 3) {
    firstLine.push(cloneArr[i]);
  }
  for (let j = 1; j <= cloneArr.length; j += 3) {
    secondLine.push(cloneArr[j]);
  }
  for (let h = 2; h <= cloneArr.length; h += 3) {
    thirdLine.push(cloneArr[h]);
  }

  const concat = firstLine.concat(secondLine, thirdLine)
  const filtered = concat.filter((item) => {
    return item !== undefined;
  })
  return filtered.toString().replace(/,/g, '');
};