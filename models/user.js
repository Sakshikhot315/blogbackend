const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    userid: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },


},
    { timestamps: true }
)

module.exports = mongoose.model("User",userSchema)