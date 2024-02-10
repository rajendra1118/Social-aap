const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const dbconnection = mongoose.connect(process.env.mongourl)

module.exports = {
    dbconnection
}