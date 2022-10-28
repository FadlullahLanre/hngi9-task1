const express = require("express")
const router = express.Router();

const {
    returnUser
} = require('../controller/user')

router.route('/').get(returnUser)


module.exports = router