const express = require("express")
const app = express()

console.log("hello world")
//  loop is used to print the numbers in sequence,consecutive.
let num=10
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


// printing the even numbers from 1 to 10

for(let num=1;num<=10;num++){
    let count=0;
    for(let i=2;i<num;i++){
        if(num%i==0){
            count++
        }
    }
    if(count==0 && num>1){
        console.log(num)
    }
}

