const express = require("express");
const path = require("path");
const hbs = require("express-handlebars");
const json = require("./ques.json");

let app = express();

app.engine("handlebars", hbs({defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.get('/ask', function (req, res) {
    res.render("ask");
})

app.get('/vote', function (req, res) {
    res.render("vote",{
        question : json[Math.floor(Math.random()* json.length)]
    });
})


app.listen(9999, function (err) {
    if (err) console.error(err);
    else console.log("Sever is listening at port : 9999");
});