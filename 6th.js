let Users = []
function add(id,name,age,subject){
    let obj = {
        id, name, age, subject
    }
    Users.push(obj)
}
function del(index){
    Users.splice(index,1)
}
function mod(index,attribute,newValue){
    Users[index][attribute] = newValue
}
add(2283850950,"Soli",20,"computer")
add(2776009785, "Ali", 22, "bargh")
add(2234656674, "Shina", 19, "shimi")
del(2)
mod(1,"age",56)
console.log(Users)