const express = require('express');
const apiRouter = express.Router();
const userRouter = require('./userRouter')

// apiRouter.use('/', (req, res, next) => {
//     console.log('123');
//     next();
// })

apiRouter.get("/", (req, res) => {
    res.send("tech kid")
})

apiRouter.use('/users', userRouter);

module.exports = apiRouter;