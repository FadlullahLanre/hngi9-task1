const express = require("express")
const router = express.Router();

const {
    returnUser, postOperation
} = require('../controller/user')

router.route('/').get(returnUser).post(postOperation)


module.exports = router