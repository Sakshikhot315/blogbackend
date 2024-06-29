const express = require('express')

const router = express.Router()

const  blogModel = require('../models/blog')

const {getBlog,getId,createBlog,editBlog,deleteBlog} = require('../controllers/blog')

router.get('/getblogs',getBlog)

router.get('/getblogs/:id', getId)

router.post('/createblogs',createBlog)

router.put('/editblogs/:id',editBlog)

router.delete('/deleteblogs/:id',deleteBlog)


module.exports=router