showprev?.addEventListener("click", event =>{
    if (i%2==0){
        drawer!.classList.replace("-start-full","start-0")
        i++
        showprev.innerText = "Hide Previous Inputs"
    }
    else {
        drawer!.classList.replace("start-0","-start-full")
        i++
        showprev.innerText = "Show Previous Inputs"
    }
})
hideprev?.addEventListener("click", event =>{
    drawer!.classList.replace("start-0","-start-full")
    i++
    showprev!.innerText = "Show Previous Inputs"
})
submitButton?.addEventListener("click", event =>{
    let NameInput = document.querySelector<HTMLInputElement>("#Name")?.value
    let NumberInput = document.querySelector<HTMLInputElement>("#Number")?.value
    let StorageInput = document.querySelector<HTMLInputElement>('input[name=radio]:checked')?.value
    if (NameInput && NumberInput && StorageInput){
        AddToList(NameInput,NumberInput,StorageInput)
    }
})