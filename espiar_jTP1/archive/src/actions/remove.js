/* FIXME:
*
* export a function that removes a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/
const data = require("../store");
const remove = (id) => {
    var found = data.getState().pictures.find(function (element) {
        return parseInt(element.id) ===  id;
    });
    var index = data.getState().pictures.indexOf(found);
    if (index > -1)
        data.getState().pictures.splice(index, 1);
};

module.exports = {
  remove
};
