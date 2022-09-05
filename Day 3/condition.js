let a = prompt("hey what's your age?"); //prompt(string) asks but aleart say's
alert("hello");
//converting a string to number
a = Number.parseInt(a);
console.log(a);
if (a < 0) {
  aleart("this is a valid age");
} else if (a < 9) {
  aleart("you are a kid don't even think to drive");
} else if (a > 9 && a < 18) {
  aleart("you are a kid but you can drive a car after 18");
} else {
  alert("this is not a valid age");
}
//it can be switch case also
//ternary operator
console.log("you can", age < 18 ? "drive" : "not drive");
