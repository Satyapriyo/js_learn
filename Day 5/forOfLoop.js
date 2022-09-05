//this is forIn loop a advanced version of for loop
let obj ={
    harry: 68,
    shubh: 89,
    satya:80
}
for (let a in obj) {
    console.log("marks of",a,'are',obj[a])
}
//forOf also can be used for array
for(let b of "satya"){
    console.log(b)
}