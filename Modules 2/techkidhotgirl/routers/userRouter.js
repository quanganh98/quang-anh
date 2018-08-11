const express = require('express');
const userRouter = express.Router();
const userModel = require('../models/userModels');

userRouter.get("/", (req, res) => {
    userModel.find({}, (err, users) => {
        if (err) res.status(500).send({ suuccess: 0, err });
        else {
            res.send({ suuccess: 1, users })
        }
    })
})

userRouter.post("/", (req, res) => {
    const { userName, email, password, avatarUrl, fullName } = req.body;
    userModel.create({ userName, email, password, avatarUrl, fullName },
        (err, created) => {
            if (err) res.status(500).send({ suuccess: 0, err });
            else {
                res.send({ suuccess: 1, created })
            }
        })
})

userRouter.delete("/:id", (req, res) => {
    id = req.body.id;
    userModel.findByIdAndRemove(id, (err, uersRemove) => {
        if (err) res.status(500).send({ suuccess: 0, err });
        else {
            res.status(201).send({ suuccess: 1, uersRemove });
        }
    })
})

userRouter.put("/:id", (req, res) => {
    id = req.body.id;

    const { userName, email, password, avatarUrl, fullName } = req.body;
    
    userModel.findByIdAndUpdate(id,{ userName, email, password, avatarUrl, fullName }, (err, userUpdate) => {
        if (err) res.status(500).send({ suuccess: 0, err });
        else {
            res.status(500).send({ suuccess: 0, userUpdate });
        }
    })
})

// userRouter.put('/:id', function (req, res) {
//     var id = req.id;

//     id = extend(id, req.body);

//     company.save(function (err) {
//         if (err) {
//             return res.send('/:id', {
//                 errors: err.errors,
//                 id: id
//             });
//         } else {
//             res.jsonp(id);
//         }

//     });
// })



module.exports = userRouter;