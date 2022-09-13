import PostMessage from "../models/postMessage.js"

const post = {}
post.getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (error){
        res.status(404).json({ message: error.message})
    }
}

post.createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post)
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}
post.getPost = async (req, res ) => {
    try {
        const { id } = req.params;
        const post = await PostMessage.findById(id)
        res.status(200).json(post)
    }catch (error){
        res.status(409).json({ message: error.message})
    }

}
post.editPost =  async (req, res ) => {
    try {
        const { id } = req.params;
        const post = await PostMessage.findByIdAndUpdate(id, {$set: req.body}, {new:true})
        res.status(200).json(post)
    }catch (error){
        res.status(409).json({ message: error.message})
    }

}

post.deletePost =  async (req, res ) => {
    try {
        const { id } = req.params;
        const post = await PostMessage.findByIdAndDelete(id)
        res.status(200).json(post)
    }catch (error){
        res.status(409).json({ message: error.message})
    }

}
export default post