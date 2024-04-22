const express=require("express");
const bodyParser=require('body-parser');
const app=express();
const port=8000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.post('/login',(req,res)=>{
    const {username,password}=req.body;
    res.send(`Login Succesful. Welcome, ${username}`);
});
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/login.html');
});
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});