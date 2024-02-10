

const express = require("express")
const { UserModel } = require("../models/userModel")
const userRouter = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

userRouter.post("/register", async (req, res) => {

    const { name, email, gender, password } = req.body
    //  const newuser = new UserModel(data)
    // await newuser.save()
    // res.send("new user register")

    try {
        bcrypt.hash(password, 5, async function (err, hash) {
            console.log(hash)
            if (err) {
                res.send("hasing is wrong")
            } else {

                const newuser = new UserModel({ name, email, gender, password: hash })
                await newuser.save()

                res.send("new user registers succesfully")

            }

        });


    } catch (error) {
        res.send("error in registering user")

    }


})

userRouter.post("/login", async (req, res) => {

    const { email, password } = req.body
    try {
        const user = await UserModel.findOne({ email })
        if (user) {
            bcrypt.compare(password, user.password, function (err, result) {
                // result===ture
                if (result) {
                    const token = jwt.sign({ app: "masai social" }, 'masaiuser');
                    res.send({ "msg": "login succesful", "token": token, userId: user._id })
                } else {
                    res.send("password is wrong")
                }

            })
        } else {
            res.send("user not found")

        }


    } catch (error) {
        res.send({ "error": error })
    }
})


module.exports = {
    userRouter
}