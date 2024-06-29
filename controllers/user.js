const userModel = require('../models/user')
const bcrypt = require('bcrypt')
const saltRounds = 10

const Register = async (req, res) => {
    try {
        const userExist = await userModel.findOne({ userid: req.body.userid });

        if (userExist) {
            return res.status(200).json({ message: 'User already exists', success: false });
        }

     
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        const user = await userModel.create({ ...req.body, password: hashedPassword });

        res.status(200).json({ message: 'User registered successfully', success: true, user });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
};

const Login = async (req, res) => {
    try {
        const user = await userModel.findOne({ userid: req.body.userid });

        if (!user) {
            return res.status(200).json({ message: 'User not found', success: false });
        }

        
        const isMatch = await bcrypt.compare(req.body.password, user.password);

        if (!isMatch) {
            return res.status(200).json({ message: 'Invalid password', success: false });
        }

        res.status(200).json({ message: 'Login successful', success: true, user });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
};


module.exports = { Register, Login };