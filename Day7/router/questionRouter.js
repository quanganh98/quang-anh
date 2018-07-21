const express = require("express");
const router = express.Router();
const fs = require("fs");

let bodyParser = require('body-parser');


let questionList = require("../questions.json");

router.get("/", function (req, res) {
    let question = questionList[req.params.questionId]
    res.render("question", {
        question: question,
        total: question.yes + question.no
    })
});

router.post("/add", function (req, res) {
    let newQuestion = {
        content: req.body.questionContent,
        yes: 0,
        no: 0,
        id: questionList.length
    };
    questionList.push(newQuestion);
    fs.writeFileSync('./questions.json', JSON.stringify(questionList));
    res.redirect('/question/' + newQuestion.id);
})

router.get("/:questionId", function (req, res) {
    let question = questionList[req.params.questionId]
    res.render("question", {
        question: question,
        total: question.yes + question.no
    })
})

// app.get("/question/:questionId", function(req, res){
//     let question = questionList[req.params.questionId]
//     res.render("question", {
//         question: question,
//         total: question.yes + question.no
//     })
// })

// app.post("/question/add",function(req, res){
//     let newQuestion = {
//         content: req.body.questionContent,
//         yes: 0,
//         no: 0,
//         id: questionList.length
//     };
//     questionList.push(newQuestion);
//     fs.writeFileSync('./questions.json', JSON.stringify(questionList));
//     res.redirect('/question/'+newQuestion.id);
// });

// app.get("/question", function(req, res){
//     let question = questionList[req.query.questionId]
//     res.render("question", {
//         question: question,
//         total: question.yes + question.no
//     })
// })


module.exports = router;