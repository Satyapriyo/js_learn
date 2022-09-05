let friendName = "Prakash";
console.log(friendName.length); //property
console.log(friendName.toUpperCase()); //funtion
console.log(friendName.toLowerCase()); //funtion
console.log(friendName.toUpperCase()); //funtion
console.log(friendName.slice(2)); //funtion
console.log(friendName.slice(2, 5)); //funtion
console.log(friendName.slice(2, friendName.length, 2)); //funtion
let sentance = "bol bhi tere ko kya chahia";
console.log(sentance.replace("bhi", "bhau"));
console.log(sentance);
//concatinate
console.log(sentance + " " + friendName + " bro");
//extra space remover
let extra = "     bol kya hua    ";
console.log(extra.trim());
console.log(extra);
// strings are immutable
let bro = "satya";
// console.log(bro[0])
for (let index = 0; index < bro.length; index++){
  console.log(bro[index]);
}
console.log(bro.padStart(5, 0)); //ecma 2017
console.log(bro.padEnd(5, 0));
console.log(bro.charAt(4)); //returns char
console.log(bro.charCodeAt(4)); //returns aschii
console.log(sentance.search('bol'))//returns 0 if found and returns -1 if not found
let text = 'a,b,c'
let arr2=text.split(",")//making arr to string
console.log(arr2[2])
console.log(text)
