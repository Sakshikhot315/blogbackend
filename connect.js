const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://omkhot511:sakshi@blogweb.po5tsu7.mongodb.net/?retryWrites=true&w=majority&appName=blogweb')
    .then(() => {
        console.log("MongoDB Connected")
    }).catch(() => {
        console.log("MongoDB Not Connected")
    })