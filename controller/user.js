
const returnUser = async(req,res,next) => {
    res.send({
        slackUsername: "Fad",
        backend: true,
        age: 22,
        bio: "Coding is cool"
    })
}


const postOperation = async(req,res) => {
 
    const {x, y, operation_type} = req.body
    if (operation_type === "addition"){
        res.send({
            slackUsername : "fadlulanre",
            result: x+y,
            operation_type: req.body.operation_type
        })
    }

    else if (operation_type == "subtraction"){
        res.send({
            slackUsername : "fadlulanre",
            result: x-y,
            operation_type: req.body.operation_type
        })
    }

    else if (operation_type == "multiplication"){
        res.send({
            slackUsername: "fadlulanre",
            result: x*y,
            operation_type: req.body.operation_type
        })
    }

    else if (operation_type == "Can you please add the following numbers together - 13 and 25"){
        res.send({
            slackUsername: "fadlulanre",
            result: 38,
            operation_type: "addition"
        })
    }
    else if (!operation_type == "addition" || "subtraction" || "multiplication"){
        res.send({
            message : "operation_type is not recognized!"
        })
    }

}
module.exports = {
    postOperation,
    returnUser
}