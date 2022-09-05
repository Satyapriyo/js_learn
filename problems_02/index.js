// 1
/*
let age = prompt("enter you age:")
if(age >10 && age<20){
    console.log("your age lies between 10 and 20")
}
else{
    console.log("your age not lies between 10 and 20")
} */
// 2
/*
let age = prompt("enter your age:")
age = Number.parseInt(age)
switch (age){
    case 12:
        console.log("your age is 12")
        break;
    case 13:
        console.log("your age is 13")
        break;
    case 14:
        console.log("your age is 14")
        break;    
    default:
        console.log("your age is not defined in this program")
        break;
}
*/
//3
/*
let num = prompt("enter a num:")
num = Number.parseInt(num)
if(num%2==0 && num%3 ==0){
    console.log("perfect number hai bro👍😊")
}
else{
    console.log("perfect number nehi hai bro😓")

}*/
//4
/*
let num = prompt("enter a num:")
num = Number.parseInt(num)
if(num%2==0 || num%3 ==0){
    console.log("perfect number hai bro👍😊")
}
else{
    console.log("perfect number nehi hai bro😓")

}*/
let a = prompt("enter your age");
a = Number.parseInt(a);
console.log("you", a >= 18 ? "can" : "can't", "drive");
