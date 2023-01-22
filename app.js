const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const hostname = "localhost";

app.use(express.json());

app.get('/sum', (req, res) => {
    console.log(req.body);
    let x = req.body.firstNum;
    let y = req.body.secondNum;
    let z = x + y;

    if(typeof(z) === NaN){
        res.status(400).send({"Error": "Request does not have numbers"});
    } else {
        res.status(200).send({"sum": z});
    }
});

app.get('/sub', (req, res) => {
    console.log(req.body);
    let x = req.body.firstNum;
    let y = req.body.secondNum;
    let z = x - y;

    if(typeof(z) === NaN){
        res.status(400).send({"Error": "Request does not have numbers"});
    } else {
        res.status(200).send({"sub": z});
    }   
});

app.get('/product', (req, res) => {
    console.log(req.body);
    let x = req.body.firstNum;
    let y = req.body.secondNum;
    let z = x * y;

    if(typeof(z) === NaN){
        res.status(400).send({"Error": "Request does not have numbers"});
    } else {
        res.status(200).send({"product": z});
    }   
});

app.get('/div', (req, res) => {
    console.log(req.body);
    let x = req.body.firstNum;
    let y = req.body.secondNum;
    let z;
    if(y === 0) {
        res.status(100).send({"Error": "Denominator cannot be 0"});
    } else {
        z = x / y;
    }

    if(typeof(z) === NaN){
        res.status(400).send({"Error": "Request does not have numbers"});
    } else {
        res.status(200).send({"div": z});
    }   
});

app.listen(PORT, hostname, () => console.log(`Server running at http://${hostname}:${PORT}/`));
