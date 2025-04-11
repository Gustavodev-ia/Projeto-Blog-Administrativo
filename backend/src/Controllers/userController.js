const User = require("../Models/User")
const jwt = require("jsonwebtoken")
const bycript = require("bcrypt")
require("dotenv").config()

exports.register = async (req,res) =>{

    try {
        const {nome,email,senha} = req.body

        const user = await User.create({nome,email,senha})
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


exports.login = async (req,res) =>{
    try {
        const {email,senha} = req.body

        const user = await User.findOne({where:{email}})

        if(!user || !(await bycript.compare(senha,user.senha))){
            return res.status(401).json({error:"Credenciais invalidas"})
        }

        const token = jwt.sign({id:user.id},process.env.JWT_SECRET,{expiresIn:'1h'})
        res.json(token)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}