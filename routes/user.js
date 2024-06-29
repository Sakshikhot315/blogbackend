const express = require('express')

const router = express.Router()

const userModel = require('../models/user')

const {Register,Login} = require('../controllers/user')

router.post('/register',Register)

router.post('/login',Login)

module.exports=router