const express = require('express');
const router = express.Router();
const path = require('path');
const { TesseractWorker } = require('tesseract.js'); 




router.get('/', (req,res) => {
    let displayText;

    const worker = new TesseractWorker({
        langPath: path.join(__dirname, 'tesseract/lang-data')
    });
    
    worker
        .recognize(path.join(__dirname, 'tesseract/images', 'scrisoare.jpg'))
        .progress((info) => {
            console.log(info);
        })
        .then((result) => {
            console.log(result.text);
            res.send(result.text);
            process.exit();
        })
        .catch((err) => console.log(err));
    
    
})

module.exports = router;