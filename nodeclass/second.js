
const fs=require('fs');
//read a json file
fs.readFile('first.json',"utf-8",(err,data)=>{
    if(err){
        console.error("err")

    }
    else{
        console.log(JSON.parse(data))
    }
})