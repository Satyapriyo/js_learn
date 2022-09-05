debugger;
// program to add first n natural numbers
sum =0
let n= prompt("enter the number to sum upto\n")
n=Number.parseInt()
for (let index = 1; index < 10; index++){
    sum += index;
    console.log(index)
}
console.log("sum offirst n natural numbrs ",sum)
factorial = 1
for (let index = 1; index <= 4; index++) {
    factorial *= index
}
console.log(factorial)