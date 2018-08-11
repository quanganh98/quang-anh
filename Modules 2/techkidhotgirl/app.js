const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRouter = require('./routers/apiRouter')


let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (requestAnimationFrame, res) => {
    res.send("Techkid hot girl sever");
})

app.use('/api', apiRouter)

mongoose.connect("mongodb://localhost/techkid-hotgirl", (err) => {
    if (err) console.error(err)
    else {
        console.log("Sever Start")
    }
})

let port = 6969;

app.listen(port, (err) => {
    if (err) console.err(err);
    else {
        console.log(`server is listening at ${port}`)
    }
})
