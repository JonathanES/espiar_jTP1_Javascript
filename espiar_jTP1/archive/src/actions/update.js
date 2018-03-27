/* FIXME:
*
* export a function that updates a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
* - the updated element must not share the same reference as the previous one.
*
*/
const data = require("../store");
const update = (x, id) => {
    const { pictures } = data.getState();
    const newState = {
        pictures: pictures.map(p => p.id !== id ? p : {...p,...x})
    }
    data.setState(newState);
};

module.exports = {
  update
};
