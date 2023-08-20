"use strict";
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
}
else {
    document.documentElement.classList.remove('dark');
}
const submitButton = document.querySelector("#add");
const drawerTable = document.querySelector("#table");
const drawer = document.querySelector("#drawer");
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener("click", event => {
    var _a, _b, _c;
    let titleInput = (_a = document.querySelector("#title")) === null || _a === void 0 ? void 0 : _a.value;
    let elaborateInput = (_b = document.querySelector("#message")) === null || _b === void 0 ? void 0 : _b.value;
    let storageInput = (_c = document.querySelector('input[name=radio]:checked')) === null || _c === void 0 ? void 0 : _c.value;
    if (titleInput && elaborateInput && storageInput) {
        let content = `<tr
					class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
					<th
						scope="row"
						class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
						${titleInput}
					</th>
					<td class="px-6 py-4">${elaborateInput}</td>
					<td class="px-6 py-4">${storageInput}</td>
				</tr>`;
        drawerTable.innerHTML += content;
    }
});
const showprev = document.querySelector("#showprev");
showprev === null || showprev === void 0 ? void 0 : showprev.addEventListener("click", event => {
    drawer.className = drawer.className.replace("hidden", "");
});
const hideprev = document.querySelector("#hideprev");
hideprev === null || hideprev === void 0 ? void 0 : hideprev.addEventListener("click", event => {
    drawer.className += " hidden";
});
//# sourceMappingURL=index.js.map