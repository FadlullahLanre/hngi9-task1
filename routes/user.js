const express = require("express")
const router = express.Router();

const {
    createUser,
    getUser,
    getAllUsers
} = require('../controller/user')

router.route('/').post(createUser).get(getAllUsers)
router.route('/:id').get(getUser)

module.exports = router