let firstnum = +prompt("Enter the first number:")
let operator = prompt("Enter the operator:")
let secondnum = +prompt("Enter the second number:")
if (operator == "+") {
    console.log(firstnum + " + " + secondnum + " = " + (firstnum + secondnum))
}
else if (operator == "-") {
    console.log(firstnum + " - " + secondnum + " = " + (firstnum - secondnum))
}
else if (operator == "/") {
    console.log(firstnum + " / " + secondnum + " = " + firstnum / secondnum)
}
else if (operator == "*") {
    console.log(firstnum + " * " + secondnum + " = " + firstnum * secondnum)
}
else {
    console.log("Operator Error !!!")
}