const express = require("express")
const { dbconnection } = require("./dbconnect");
const { userRouter } = require("./routes/userRouter")
const { postRouter } = require("./routes/postRouter")
const cors = require('cors')

const dotenv = require("dotenv").config()
const PORT = process.env.PORT
const app = express()
app.use(cors({
    origin: "http://localhost:3000"
}))
app.use(express.json())

app.use("/users", userRouter)
app.use("/posts", postRouter)

app.get("/", (req, res) => {
    res.send("this is home page")
})


app.listen(PORT, async () => {
    try {
        await dbconnection
        console.log("db connected")
        console.log(`server is running on port ${PORT}`)


    } catch (error) {
        console.log(error)
    }

})


