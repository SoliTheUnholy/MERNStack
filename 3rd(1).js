function calc(firstnum, b, secondnum){
    switch (b){
    case "+":
        return firstnum + " + " + secondnum + " = " + (firstnum + secondnum)
    
    case "-":
        return firstnum + " - " + secondnum + " = " + (firstnum - secondnum)
    
    case "/":
       return firstnum + " / " + secondnum + " = " + firstnum / secondnum
   
    case "*":
        return firstnum + " * " + secondnum + " = " + firstnum * secondnum
    }
    return console.log("Operator Error !!!")
}
console.log(calc(+prompt("Enter the first number:"), prompt("Enter the operator:"), +prompt("Enter the second number:")))
