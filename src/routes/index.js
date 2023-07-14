const express = require('express')
const router = express.Router()
const v1apiRouter = require('./v1/index');


// define the home page route
router.use('/v1', v1apiRouter)


// define the v2 route if there was any
// router.get('/v2', );

module.exports = router
