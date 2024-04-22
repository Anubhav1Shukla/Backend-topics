const express = require('express');


const app = express();

const router = express.Router();
router.use(function(req, res,next){
    console.log('Middleware called!');
    next();
});

app.use('/user', router);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});