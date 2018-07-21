const express = require("express");
const hdb = require("express-handlebars");
const questionList = require("./questions.json");
const fs = require("fs");
const questionRouter = require('./router/questionRouter');

let app = express();
let bodyParser = require('body-parser');



app.engine("handlebars",hdb({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/question", questionRouter);

app.get("/",function(req, res){
    let questionRandom = questionList[Math.floor(Math.random()*questionList.length)];
    res.render("vote",{
        question : questionRandom
    });
})

app.get("/ask",function(req, res){
    res.render("ask");
})

app.get("/answer/:questionId/:vote", function(req,res){
    questionList[req.params.questionId][req.params.vote] += 1;
    fs.writeFileSync("./questions.json",JSON.stringify(questionList))
    res.redirect("/question/" + req.params.questionId)
});


app.listen(process.env.PORT || 9999, function (err) {
    if (err) console.error(err);
    else console.log("Sever is listening at port : 9999");
});