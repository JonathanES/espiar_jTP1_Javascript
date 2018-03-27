/* FIXME:
*
* export a function that adds a new element to the store.
*
* Rules:
* - add must be able to take either a single element
* or an array of new elements
* - you must use the functions from "../store"
*
*/
const data = require("../store");
const add = (x) => {
    let res = data.getState().pictures;
    if (Array.isArray(x))
        data.getState().pictures.push(...x);
    else
        data.getState().pictures.push(x);
    data.setState(data.getState());
};

module.exports = {
  add
};
