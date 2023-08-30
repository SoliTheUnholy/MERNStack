document.documentElement.classList.add('dark')
let i = 0
function AddToList(NameInput:string,NumberInput:string,StorageInput:string) {
        const NewItem = document.createElement("tr")
        NewItem.className = "bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        const ItemName = document.createElement("td")
        ItemName.className = "px-6 py-4"
        ItemName.innerText = NameInput
        NewItem.appendChild(ItemName)
        const ItemNumber = document.createElement("td")
        ItemNumber.className = "px-6 py-4"
        ItemNumber.innerText = NumberInput
        NewItem.appendChild(ItemNumber)
        const ItemStorage = document.createElement("td")
        ItemStorage.className = "px-6 py-4"
        ItemStorage.innerText = StorageInput
        NewItem.appendChild(ItemStorage)
        drawerTable?.appendChild(NewItem)
}