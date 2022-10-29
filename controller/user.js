
const returnUser = async(req,res,next) => {
    res.send({
        slackUsername: "Fad",
        backend: true,
        age: 22,
        bio: "Coding is cool"
    })
}

module.exports = {
    
    returnUser
}