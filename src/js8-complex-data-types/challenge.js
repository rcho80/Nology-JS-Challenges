/* This challenge build upon previous knowledge and introduces the concept of complex data types (arrays of objects) */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/* Foundation Challenges */

/**
 * A function which takes an array of employee objects and returns just an array of their quotes so we can later put
 * them on the website.
 *
 * @param {{name: string, quote: string, yearsEmployed: number, isManagement: boolean}[]} employeeArr - An array of employee objects
 * @returns {string[]} A list of the employees quotes for the website
 */
export const getEmployeeQuotes = (employeeArr) => {
  const quotes = employeeArr.map(item => item.quote);
  return quotes
}

/**
 * A function which takes an array of employee objects and returns a new array only containing employees that are managers.
 *
 * @param {{name: string, quote: string, yearsEmployed: number, isManagement: boolean}[]} employeeArr - An array of employee objects
 * @returns {{name: string, quote: string, yearsEmployed: number, isManagement: boolean}[]} An array containing only managers
 */
export const getTheManagers = (employeeArr) => {
  return employeeArr.filter(item => item.isManagement);

  // const list = employeeArr.filter(item => {
  //   if (item.isManagement === true) {
  //     return item;
  //   }
  // })
  // return list;
};

/**
 * A function which tells you the number of keys on the provided object.
 *
 * @param {object} object - The provided object with an assortment of keys
 * @returns {number} The number of the keys on the object
 */
export const getNumberOfKeys = (object) => {
  return Object.keys(object).length;

};

/* Intermediate Challenges */

/**
 * A function to find the most expensive item in the basket and returns it in order to offer this customer a discount
 * later on down the line.
 *
 * @param {{name: string, price: number, hasFreeShipping: boolean, quantity: number}[]} shoppingBasketArr - An array of basket items for an online shop
 * @returns {{name: string, price: number, hasFreeShipping: boolean, quantity: number}} The most expensive item in the shopping basket
 */
export const findMostExpensiveItem = (shoppingBasketArr) => {
  const prices = shoppingBasketArr.map(item => item.price);

  let sorted = prices.sort((a, b) => {
    return a - b;
  })

  let expensive = sorted[sorted.length - 1];

  let filterList = shoppingBasketArr.filter(item => {
    return item.price === expensive
  })
  return filterList[0];
}

/**
 * A function which add a new key of totalPrice to each shopping basket item in the array where total cost is
 * the price * the quantity of items ordered i.e.
 * {
 *  name: "jeans",
 *  price: 30,
 *  hasFreeShipping: false,
 *  quantity: 2,
 *  totalPrice: 60
 * }
 * Then returns a new array of objects
 *
 * @param {{name: string, price: number, hasFreeShipping: boolean, quantity: number}[]} shoppingBasketArr - An array of basket items for an online shop
 * @returns {{name: string, price: number, hasFreeShipping: boolean, quantity: number, totalPrice: number}[]} A new array where each object has had a total price added to it
 */
export const settotalPrice = (shoppingBasketArr) => {
  //can also do 
  //return shoppingBasketArr.map((item) => ({...item, totalPrice: item.price * item.quantity}))  

  let getItems = shoppingBasketArr.map(item => {
    return Object.assign({}, item)
  })

  const newArr = getItems.map(elem => {
    elem.totalPrice = elem.price * elem.quantity;
    return elem;
  })

  return newArr;
};

/**
 * A function which sums the total cost of every item in the array and returns it as a single number.
 *
 * @param {{name: string, price: number, hasFreeShipping: boolean, quantity: number, totalPrice: number}[]} shoppingBasketArr - An array of basket items for an online shop
 * @returns {number} The total cost of the order
 */
export const totalShoppingBasket = (shoppingBasketArr) => {
  const getPrices = shoppingBasketArr.map(item => {
    return Object.assign({}, item);
  })

  const newArr = getPrices.map(item => {
    return item.totalPrice;
  })

  const finalNum = newArr.reduce((acc, curr) => {
    return acc + curr;
  })

  return finalNum;
};

/* Advanced Challenges */

/**
 * A function which takes an array of meal objects, removes unneeded keys from the objects and returns a new array of
 * meal objects.
 *
 * @param {{id: number, name: string, ingredients: string[], country: string, timeStamp: number, userCreated: string}[]} mealsArr - An array containing meal objects
 * @returns {{id: number, name: string, ingredients: string[], country: string}[]} An array of cleaned meal objects
 */
export const getImportantKeys = (mealsArr) => {
  const cloneArr = mealsArr.map(item => {
    return Object.assign({}, item);
  })

  // destructuring works by creating timestamp and usercreated variables and then a other variable that holds the rest. then this is returned here as the new array without the first two variables
  const mapArr = cloneArr.map(test => {
    const {
      timeStamp,
      userCreated,
      ...other
    } = test;
    return other;
  })

  return mapArr
};

/**
 * A function which takes an array of meal objects and check if every object contains the necessary keys. If a key is
 * missing it adds a default value instead.
 * default values:
 * isVegetarian = false
 * timeToCook = 15
 *
 * @param {{id: number, name: string, ingredients: string[], country: string, isVegetarian?: boolean, timeToCook?: number}[]} mealsArr - An array containing meal objects
 * @returns {{id: number, name: string, ingredients: string[], country: string, isVegetarian: boolean, timeToCook: number}[]}
 */
export const setImportantKeys = (mealsArr) => {
  const cloneArr = mealsArr.map(item => {
    return Object.assign({}, item);
  })

  const mapArr = cloneArr.map(elem => {
    let list = ["id", "name", "ingredients", "country", "isVegetarian", "timeToCook"];

    let keyArrs = Object.keys(elem);

    list.map(key => {
      if (!keyArrs.includes(key) && key === "isVegetarian") {
        elem.isVegetarian = false;
      } else if (!keyArrs.includes(key) && key === "timeToCook") {
        elem.timeToCook = 15;
      } else {
        return key;
      }
    })

    return elem;

  })
  return mapArr

}


/* Expert Challenge */

/**
 * A function that takes a raw response from a cocktail API and turn each object in the response into a cleaner form
 * so that it is easier to work with.
 *
 * @param {{
 *  idDrink: number,
 *  strDrink: string,
 *  strCategory: string,
 *  strAlcoholic: string,
 *  strInstructions: string,
 *  strIngredient1: string | null,
 *  strIngredient2: string | null,
 *  strIngredient3: string | null,
 *  strIngredient4: string | null,
 *  strIngredient5: string | null,
 *  strIngredient6: string | null
 * }[]} cocktailData - The raw response from the cocktail API
 * @returns {{
 *  id: number,
 *  drink: string,
 *  category: string,
 *  alcoholic: string,
 *  instructions: string,
 *  ingredients: string[],
 * }[]} A Cleaned array of cocktail data
 */
export const cleanCocktailResponseData = (cocktailData) => {

  const cloneArr = cocktailData.map(item => {
    item.id = item.idDrink;
    item.drink = item.strDrink;
    item.category = item.strCategory;
    item.alcoholic = item.strAlcoholic;
    item.instructions = item.strInstructions;
    let ingredientsAll = `${item.strIngredient1},${item.strIngredient2},${item.strIngredient3},${item.strIngredient4},${item.strIngredient5},${item.strIngredient6}`;
    item.ingredients = ingredientsAll.split(',');

    const mapIng = item.ingredients.filter(elem => {
      return !elem.includes("null");
    })
    item.ingredients = mapIng;
    return Object.assign({}, item);
  })

  const cleanArr = cloneArr.map(final => {
    const {
      idDrink,
      strDrink,
      strCategory,
      strAlcoholic,
      strInstructions,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
      ...other
    } = final;
    return other;
  })

  return cleanArr;

}