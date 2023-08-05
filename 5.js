let List = []
function adder() {
    let obj = {
        number: Math.random()*100,
        date: Date.now(),
        word: crypto.randomUUID()
    }
    List.push(obj)
}
adder()
console.log(List)