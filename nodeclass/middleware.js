const express = require('express');
const app = express();

const myLogger=function(req,res,next){
    console.log('Logged');
    next();
}
app.use(myLogger);
app.get('/', (req, res) => {
    console.log('Hello');
    res.send('Hello');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});