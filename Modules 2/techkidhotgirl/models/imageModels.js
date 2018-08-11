const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    url: { type: String, required: true },
    description: { type: String },
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    view: { type: Number, default: 0 },
    like: { type: Number, default: 0 },
    dayOfUp: { type: Date },
    comment:
        [{
            user: { type: Schema.Types.ObjectId },
            content: { type: String, require: true },
            date: { type: Date, default: new Date() }
        }]
}, {
        timestamps: true
    })



module.exports = mongoose.model("Image", UserSchema);