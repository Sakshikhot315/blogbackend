const blogModel = require('../models/blog')

const getBlog=async(req,res)=>{
    try {
        const blog = await blogModel.find()
        res.status(200).json(blog)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getId=async(req,res)=>{
    try {
        const { id } = req.params
        const blog = await blogModel.findById(id)
        res.status(200).json(blog)

    } catch (error) {
        res.status(500).json(error)
    }
}


const createBlog=async(req,res)=>{
    try {
        const blog = await blogModel.create(req.body)
        res.status(200).json(blog)
    } catch (error) {
        res.status(500).json(error)
    }
}

const editBlog=async(req,res)=>{
    try {
        const {id} = req.params
        const blog = await blogModel.findByIdAndUpdate(id,req.body)
        res.status(200).json(blog)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteBlog=async(req,res)=>{
    try {
        const {id} = req.params
        const blog = await blogModel.findByIdAndDelete(id)
        res.status(200).json(blog)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {getBlog,getId,createBlog,editBlog,deleteBlog}

