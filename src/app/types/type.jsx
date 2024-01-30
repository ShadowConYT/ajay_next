/**
 * @typedef {Object} About
 * @property {string} name - The person's name
 * @property {number} age - The person's age
 * @property {boolean} isMarried - The person's marital status
 * @property {function(): string} sayHi - A function that returns a greeting
 * @property {Array<string>} friends - An array of the person's friends' names
 * @property {Object<string, any>} [extras] - Any additional properties
 */

/** @type {About} */
const about = {
    name: String,
    aboutIMG: String,
    aboutText: String,
  };
  
  export { about };