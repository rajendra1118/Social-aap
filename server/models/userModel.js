const mongoose = require("mongoose")

const userSchema = mongoose.Schema({

    name: { type: String },
    email: { type: String },
    gender: { type: String },
    password: { type: String }


}, { versionKey: false })

const UserModel = mongoose.model("masaiuser", userSchema)

module.exports = {
    UserModel
}