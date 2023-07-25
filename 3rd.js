function avg(a,b,c,d,e) {
    if ((a+b+c+d+e)/5 < 12) {
        return "Fail shod"
    }
    return "Pass shod"
}
console.log(avg(+prompt(), +prompt(), +prompt(), +prompt(), +prompt()))