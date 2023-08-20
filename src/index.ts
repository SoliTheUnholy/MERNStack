if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark')
}

const submitButton = document.querySelector<HTMLButtonElement>("#add")
const drawerTable = document.querySelector<HTMLTableElement>("#table")
const drawer = document.querySelector<HTMLDivElement>("#drawer")
submitButton?.addEventListener("click", event =>{
    let titleInput = document.querySelector<HTMLInputElement>("#title")?.value
    let elaborateInput = document.querySelector<HTMLInputElement>("#message")?.value
    let storageInput = document.querySelector<HTMLInputElement>('input[name=radio]:checked')?.value
    if (titleInput && elaborateInput && storageInput){
    let content = `<tr
					class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
					<th
						scope="row"
						class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
						${titleInput}
					</th>
					<td class="px-6 py-4">${elaborateInput}</td>
					<td class="px-6 py-4">${storageInput}</td>
				</tr>`
    drawerTable!.innerHTML += content
    }}
)   
const showprev = document.querySelector<HTMLButtonElement>("#showprev")
showprev?.addEventListener("click", event =>{
    drawer!.className = drawer!.className.replace("hidden","")
})
const hideprev = document.querySelector<HTMLButtonElement>("#hideprev")
hideprev?.addEventListener("click", event =>{
    drawer!.className += " hidden"
})