const express =require("express");
const app=express();
app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('Something went work');
});
app.get('/error',(req,res,next)=>{
    const err=new Error('Intentional err');
    next(err);
});
const port=3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});