"use strict";
document.documentElement.classList.add('dark');
const drawer = document.querySelector("#drawer");
const showprev = document.querySelector("#showprev");
const hideprev = document.querySelector("#hideprev");
const submitButton = document.querySelector("#Submit");
const drawerTable = document.querySelector("#table");
let i = 0;
showprev === null || showprev === void 0 ? void 0 : showprev.addEventListener("click", event => {
    if (i % 2 == 0) {
        drawer.classList.replace("-start-full", "start-0");
        i++;
        showprev.innerText = "Hide Previous Inputs";
    }
    else {
        drawer.classList.replace("start-0", "-start-full");
        i++;
        showprev.innerText = "Show Previous Inputs";
    }
});
hideprev === null || hideprev === void 0 ? void 0 : hideprev.addEventListener("click", event => {
    drawer.classList.replace("start-0", "-start-full");
    i++;
    showprev.innerText = "Show Previous Inputs";
});
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener("click", event => {
    var _a, _b, _c;
    let NameInput = (_a = document.querySelector("#Name")) === null || _a === void 0 ? void 0 : _a.value;
    let NumberInput = (_b = document.querySelector("#Number")) === null || _b === void 0 ? void 0 : _b.value;
    let StorageInput = (_c = document.querySelector('input[name=radio]:checked')) === null || _c === void 0 ? void 0 : _c.value;
    if (NameInput && NumberInput && StorageInput) {
        const NewItem = document.createElement("tr");
        NewItem.className = "bg-white border-b dark:bg-gray-800 dark:border-gray-700";
        const ItemName = document.createElement("td");
        ItemName.className = "px-6 py-4";
        ItemName.innerText = NameInput;
        NewItem.appendChild(ItemName);
        const ItemNumber = document.createElement("td");
        ItemNumber.className = "px-6 py-4";
        ItemNumber.innerText = NumberInput;
        NewItem.appendChild(ItemNumber);
        const ItemStorage = document.createElement("td");
        ItemStorage.className = "px-6 py-4";
        ItemStorage.innerText = StorageInput;
        NewItem.appendChild(ItemStorage);
        drawerTable === null || drawerTable === void 0 ? void 0 : drawerTable.appendChild(NewItem);
    }
});
//# sourceMappingURL=index.js.map