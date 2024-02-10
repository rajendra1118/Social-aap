

const express = require("express")
const { PostModel } = require("../models/postModel")
const { auth } = require("../middleware/auth.middleware")
const postRouter = express.Router()


postRouter.post("/add", auth, async (req, res) => {

    try {
        const post = new PostModel(req.body)
        await post.save()
        res.send("new post has been uploded")

    } catch (error) {

        res.send({ "error": error })

    }

})


postRouter.get("/", auth, async (req, res) => {

    try {
        const post = await PostModel.find()
        res.send(post)
    } catch (error) {
        res.send(error)
    }
})


postRouter.patch("/update/:postId", auth, async (req, res) => {

    const { postId } = req.params

    try {

        await PostModel.findByIdAndUpdate({ _id: postId }, req.body)
        res.send("post is updated")

    } catch (error) {

        res.send(error)

    }

})

postRouter.delete("/delete/:postId", auth, async (req, res) => {
    const { postId } = req.params

    try {

        await PostModel.findByIdAndDelete({ _id: postId })
        res.send("post is deleted")

    } catch (error) {

        res.send(error)

    }

})





module.exports = {
    postRouter
}
