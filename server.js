const express = require('express');
const app = express();
const router = require('./route.js')



app.use('/OCR', router);



const port = 3000;
app.listen(port, () => console.log(`App is listening at ${port}`));