const User = require('../models/Users');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const passwordHash = await bcrypt.hash(password, 10)

        const exiting = await User.findOne({email});
        if (exiting) {
            return res.status(400).json({ message: "This Email has already exit" })
        }

        const user = await User.create({
            email,
            password: passwordHash
        });
        res.status(201).json({message : "Register Successfully", user});

    } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res) =>{
    try {
        const { email, password} = req.body;
        const user = await User.findOne({ email });
        if(!user){
            res.status(400).json( { message : "User not found"})
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            res.status(400).json( { message : "password incorrect"})
        }
        
        const token = jwt.sign({ userId: user._id },process.env.JWT_SECRET,{ expiresIn: "1d" } );
        res.status(200).json({ message : "Login Successfully", token})    
   
    }catch(err){
        res.status(500).json({ message: err.message });
  }
    }
