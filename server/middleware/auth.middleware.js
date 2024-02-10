
const jwt = require("jsonwebtoken")


const auth = (req, res, next) => {

    const token = req.headers.authorization?.split(" ")[1];

    // to get token from  thunderclint's headers and ther is split and [1] is used to saperated by berare

    if (token) {
        jwt.verify(token, "masaiuser", function (err, decoded) {

            if (err) {
                res.send("token is wrong or  expire")
            } else {
                console.log(decoded, req.body)
                req.body.userId = decoded.userId,
                    req.body.user = decoded.user
                next()
            }
        })

    } else {
        res.send({ "msg": "no token" })
    }

}


module.exports = {
    auth
}