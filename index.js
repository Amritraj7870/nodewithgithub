const express = require("express")
const app = express()

console.log("hello world")
//  loop is used to print the numbers in sequence,consecutive.
let num=2
for(let i=1; i<=num; i++){
    console.log(i)
}
console.log("hi coders")
function printName(name){
    console.log(name)
}
printName("amrit")

app.get("/", (req, res) =>{
    res.send("server has created successsfuly")
})
app.listen(4000, () =>{
console.log("server is running on port 4000")
})


