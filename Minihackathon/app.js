const express = require("express")
const hdb = require("express-handlebars")
var bodyParser = require('body-parser')
const models = require("./models/gameModels")
const mongoose = require('mongoose');





let app = express();
let newGame;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.engine("handlebars", hdb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.get("/", function (req, res) {
    res.render("create")
})

app.get("/game/:gameId",function(req,res){
    models.findById(req.params.gameId,function(err,dayllagame){
        if(err) console.error(err)
        else{
            res.render("game",{
               player1: dayllagame.player1,
               player2: dayllagame.player2,
               player3: dayllagame.player3,
               player4: dayllagame.player4,
            })
        }
    })
    
})


// app.get("/game", function (req, res) {
    
//     res.render("game", {
//         player1: newGame.player1,
//         player2: newGame.player2,
//         player3: newGame.player3,
//         player4: newGame.player4
//     })
// })

app.post("/game", function (req, res) {
    newGame = {
        player1: req.body.player1,
        player2: req.body.player2,
        player3: req.body.player3,
        player4: req.body.player4,
    }

    models.create(newGame, function (err, gameCreated) {
        if (err)
            res.status(500).send({ success: 0, errMsg: err });
        else {
            res.status(201).send({ success: 1, gameId: gameCreated._id });
            // res.render("game", {
            //     player1: gameCreated.player1,
            //     player2: gameCreated.player2,
            //     player3: gameCreated.player3,
            //     player4: gameCreated.player4
            // })
            // res.redirect("/game/" + gameCreated._id);
        }
    })
})


mongoose.connect("mongodb://localhost:27017/newGame", { useNewUrlParser: true }, function (err) {
    if (err) console.error(err)
    else console.log("DB connects successfully");
})

app.listen(process.env.PORT || 9999, function (err) {
    if (err) console.error(err);
    else console.log("Sever is listening at port : 9999");
});