const titleInput = document.querySelector<HTMLInputElement>("#title")
const elaborateInput = document.querySelector<HTMLInputElement>("#message")
const submitButton = document.querySelector<HTMLButtonElement>("#submit")
const drawerTable = document.querySelector<HTMLTableElement>("#table")
const drawer = document.querySelector<HTMLDivElement>("#drawer")
submitButton?.addEventListener("click", event =>{
    let content : string = ""
    content += `<tr
					class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
					<th
						scope="row"
						class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
						${titleInput!.value}
					</th>
					<td class="px-6 py-4">${elaborateInput!.value}</td>
					<td class="px-6 py-4">${Date.apply(Date.now())}</td>
				</tr>`
    drawerTable!.innerHTML += content
    }
)
const showprev = document.querySelector<HTMLButtonElement>("#showprev")
showprev?.addEventListener("click", event =>{
    console.log("shiiiir")
    drawer!.className = drawer!.className.replace("hidden","")
})
const hideprev = document.querySelector<HTMLButtonElement>("#hideprev")
hideprev?.addEventListener("click", event =>{
    drawer!.className += " hidden"
})