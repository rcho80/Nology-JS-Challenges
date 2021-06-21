/* This challenge build upon previous knowledge and introduces the use of objects */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/* Foundation Challenges */

/**
 * A function that takes a furniture object from the catalogue and returns its price
 *
 * furniture = {
 *  name: "lack",
 *  price: 6
 * }
 *
 * @param {{name: string, price: number}} furniture - A piece of furniture from the catalogue
 * @return {number} The price of the piece of furniture
 */
export const getFurniturePrice = (furniture) => furniture.price;

/**
 * A function to attach to a store location to a furniture object from the catalogue
 *
 * @param {{name: string, price: number}} furniture - A piece of furniture from the catalogue
 * @param {string} location - A store location to attach to a piece of furniture
 * @returns {{name: string, price: number, location: string}} furniture - A furniture object from the catalogue
 */
export const setFurnitureStoreLocation = (furniture, location) => {
  furniture.location = location;
  return furniture;
};

/**
 * A function which takes a selection of arguments relating to a space ship and uses them
 * to create a space ship object
 *
 * @param {string} name The name of the space ship
 * @param {number} noOfSeats The number of seat of the space ship
 * @param {string} engineType The type of engine in the space ship
 * @param {boolean} canTravelSolarSystems The ability for the space ship to travel to different solar systems
 * @returns {{name: string, noOfSeats: number, engineType: string, canTravelSolarSystems: boolean}} spaceship - The space ship object
 */
export const makeSpaceship = (name, noOfSeats, engineType, canTravelSolarSystems) => {
  const spaceship = {
    name: name,
    noOfSeats: noOfSeats,
    engineType: engineType,
    canTravelSolarSystems: canTravelSolarSystems,
  }
  return spaceship;
};


/* function Spaceship(name,noOfSeats, engineType,canTravel) => {
  this.name = name;
  this.noOf....
}

  const spaceship - new Spaceship(name,noOf....)
  return spaceship
}  */

/* Intermediate Challenges */

/**
 * A function that will attach a username to a user but only if the user doesn't already have one
 *
 * @param {{name: string, username?: string}} user - A user object
 * @param {string} username - A username to attach
 * @returns {{name: string, username: string}} User - The user object with the same username or a new one
 */
export const setUserName = (user, username) => {

  if (user.hasOwnProperty("username")) {
    return user
  }
  user.username = username
  return user
};

/**
 * A function which takes a customer object from the database and returns the same object where the name has been
 * split into first and last name and reattached to the object
 *
 * @param {{fullName: string,}} customer A customer object from the database
 * @returns {{fullName: string, firstName: string, lastName: string}} A customer object from the database with the name separated into first and last
 */
export const splitFullNameToFirstAndLast = (customer) => {
  let splitStr = customer.fullName.split(' ');
  customer.firstName = splitStr[0];
  customer.lastName = splitStr[1];
  return customer;
};

/**
 * A function which access a given key on an object
 *
 * HELPFUL RESOURCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
 *
 * @param {object} object An object with some key value pairs (Not important what they are)
 * @param {string} key A key to access on the object
 * @returns {any} value - The value you have accessed on the object
 */
export const accessGivenKey = (object, key) => {
  return object[key]; // this key is not the argument passed in brackets... it is a string here being passed under key; 
};

/* Advanced Challenges */

/**
 * A function which takes a user object, accesses it's address and returns it as a string to print onto a shipping label
 * "4 Privet Drive Little Whinging Surrey CR3 0AA"
 *
 * @param {{id: number, name: string, address: {line1: string, line2: string, city: string, postcode: string}}} user - A user object from the database
 * @returns {string} An address string for a shipping label
 */
export const getUserAddress = (user) => {
  const address = user.address;
  return Object.values(address).toString().replace(/,/g, " ");
  //return Object.values(address).join(" ");
  // ==> return object.values => this can be problem if list is not in order or correct
};

/**
 * A function that given a customer for the restaurant with a list of known allergies and a list of allergens in an
 * array, will attach an array of allergens safe for the customer to eat to the customer object and return it
 *
 * @param {{id: number, name: string, allergies: string[]}} customer - A customer for the restaurant
 * @param {string[]} allergenList - A list of all known allergens
 * @return {{id: number, name: string, allergies: string[], safeAllergens: string[]}} customer
 */
export const setSafeAllergens = (customer, allergenList) => {
  const container = [];
  let list = customer.allergies;

  const eachItem = allergenList.forEach(item => {
    if (list.indexOf(item) === -1) {
      container.push(item)
    }
  })
  customer.safeAllergens = container;
  return customer;
};

/* Expert Challenge */

/**
 * A function which takes two objects which hold different information about the same piece of furniture, merges them
 * and returns it. You should do this WITHOUT modifying the original pieces of data
 *
 * @param {{id: number, location: string, sku: string}} furnitureLocationData - All of the data about the furnitures location in the store
 * @param {{id: number, name: string, price: number, isAvailable: boolean}} furnitureProductData - All of the data about the furniture product
 * @returns {{id: number, location: string, sku: string, name: string, price: number, isAvailable: boolean}}
 */
export const mergeFurniture = (furnitureLocationData, furnitureProductData) => {

  const mergeList = {
    ...furnitureLocationData,
    ...furnitureProductData
  }
  return mergeList;
};

//always takes the last if same element with spread 