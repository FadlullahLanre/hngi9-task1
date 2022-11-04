const express = require("express")
const router = express.Router();

const {
     postOperation
} = require('../controller/user')

router.route('/').post(postOperation)


module.exports = router