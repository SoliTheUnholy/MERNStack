"use strict";
const titleInput = document.querySelector("#title");
const elaborateInput = document.querySelector("#message");
const submitButton = document.querySelector("#submit");
const drawerTable = document.querySelector("#table");
const drawer = document.querySelector("#drawer");
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener("click", event => {
    let content = "";
    content += `<tr
					class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
					<th
						scope="row"
						class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
						${titleInput.value}
					</th>
					<td class="px-6 py-4">${elaborateInput.value}</td>
					<td class="px-6 py-4">${Date.apply(Date.now())}</td>
				</tr>`;
    drawerTable.innerHTML += content;
});
const showprev = document.querySelector("#showprev");
showprev === null || showprev === void 0 ? void 0 : showprev.addEventListener("click", event => {
    console.log("shiiiir");
    drawer.className = drawer.className.replace("hidden", "");
});
const hideprev = document.querySelector("#hideprev");
hideprev === null || hideprev === void 0 ? void 0 : hideprev.addEventListener("click", event => {
    drawer.className += " hidden";
});
//# sourceMappingURL=index.js.map