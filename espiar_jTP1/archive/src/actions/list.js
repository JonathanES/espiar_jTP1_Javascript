/* FIXME:
*
* export a function that returns all the current elements from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/
const data = require('../store.js');
const list = () => { return data.getState().pictures; };

module.exports = {
  list
};
