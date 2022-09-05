//1
console.log("har\"".length)
//as \'char' is counts as a charector in js 
//2
let s = "satyapriyo is my name and i use to enjoy learning some thing new everytime"
console.log(s.includes("satyapriyo"))
console.log(s.startsWith("satyapriyo"))
console.log(s.endsWith("time"))
//3
let upper ="Hello SATYA"
console.log(upper.toLocaleLowerCase())
console.log(upper.toLowerCase())
//4  extract number from string
let str ="pls give rupess 1000"
let amt =Number.parseInt(str.slice("pls give rupess ".length))
console.log(amt)
console.log(typeof(amt))
//5 change the forth char inn s1
let s1 ="depika"
let s2 =""
s1[3]="t"//it neigther throughs error nor changes the string
console.log(s1);
for (let i=0 ; i < s1.length ; i++) {  
    i==3 ? s2 += "t": s2+= s1[i];
}
console.log(s2)