const User = require('../model/userProfile');

const createUser =  async (req, res) => {

    const user = await User.create(req.body)
    res.status(201).json({user})

}

const getAllUsers =  async (req, res, next) => {
    const user = await User.find()
    res.status(200).json(user)
}

const getUser = async (req, res, next) => {
    const singleUser = await User.findOne({_id : req.params.id})

    if(!singleUser){
        return next(res.send(`no task with id : ${req.params.id}`, 400))
    }
    res.status(200).json({singleUser})
}

module.exports = {
    createUser,
    getAllUsers,
    getUser
}