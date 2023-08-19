"use strict";
let usersList = [];
function adder(obj) {
    usersList.push(obj);
}
function remover(id) {
    usersList = usersList.filter(item => item.id != id);
}
function editor(id, obj) {
    let index = usersList.findIndex(item => item.id == id);
    usersList[index] = obj;
}
//# sourceMappingURL=index.js.map