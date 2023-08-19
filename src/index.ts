type userType = {
    name: String,
    surename: String,
    age: Number,
    job: String,
    marriageStatus: "Married" | "Single",
    gender: "Male" | "Female" | "Croissant",
    height: Number,
    weight: Number,
    id: Number,
    phoneNumber: String,
}
let usersList : userType[] = []
function adder(obj:userType){
    usersList.push(obj)
}
function remover(id:userType["id"]){
    usersList = usersList.filter(item => item.id != id)
}
function editor(id: userType["id"], obj: userType){
    let index = usersList.findIndex(item => item.id == id)
    usersList[index] = obj
}