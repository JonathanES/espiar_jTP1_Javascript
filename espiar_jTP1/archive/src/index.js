const { list, add, remove, get, update } = require("./actions");

console.log("started !");

console.log(JSON.stringify(list()));
console.log(JSON.stringify(get(1)));
add({ id: 6, name: "picture6", extension: "jpg" });
add([{ id: 7, name: "picture7", extension: "jpg" }, { id: 8, name: "picture8", extension: "jpg" }]);
console.log("");
console.log(JSON.stringify(list()));

remove(7);
console.log("");
console.log(JSON.stringify(list()));
update({ name: "picture10" },1)
console.log("");
console.log(JSON.stringify(list()));
//console.log(JSON.parse(JSON.stringify(list())));
// NOTE: if you are looking for the right place to test your functions,
//   it might be right here.
