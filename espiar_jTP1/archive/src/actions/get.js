/* FIXME:
*
* export a function that gets a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/
const data = require('../store.js');
const get = (id) => {
    let res = null;
    data.getState().pictures.forEach(function (element) {
        if (parseInt(element.id) === id)
            res =  element;
    });
    return res;
};

module.exports = {
  get
};
