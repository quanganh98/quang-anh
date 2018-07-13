const express = require("express");
const path = require("path");
const hbs = require("express-handlebars");
const json = require("./ques.json");
const quitz = require("./question.json");
const fs = require("fs");
const bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.engine("handlebars", hbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.get('/ask', function (req, res) {
    res.render("ask");
})

app.get('/vote', function (req, res) {
    let quesrd = quitz[Math.floor(Math.random() * quitz.length)]
    res.render("vote", {
        question: quesrd
    });
})

//param
///query

app.get("/question/:questionID", function (req, res) {
    let question = quitz[req.params.questionID];
    res.render("seevote", {
        question,
        total: question.yes + question.no
    })
})

app.get("/answer/:questionID/:vote", function (req, res) {
    quitz[req.params.questionID][req.params.vote] += 1;
    fs.writeFileSync('./question.json', JSON.stringify(quitz));
    res.redirect("/question/" + req.params.questionID);
})


app.post("/question/add", function (req, res) {
    let newQ = {
        content: req.body.questionContent,
        yes: 0,
        no: 0,
        id: quitz.length
    };
    quitz.push(newQ);
    fs.writeFileSync('./question.json', JSON.stringify(quitz));
    res.redirect('/question/' + newQ.id)
});



app.listen(process.env.PORT || 9999, function (err) {
    if (err) console.error(err);
    else console.log("Sever is listening at port : 9999");
});