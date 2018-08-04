const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let newGame = new Schema({
    player1: { type: String, default: "player1" },
    player2: { type: String, default: "player2" },
    player3: { type: String, default: "player3" },
    player4: { type: String, default: "player4" },
}, {
        timestamps: true
    });

module.exports = mongoose.model("Question", newGame);