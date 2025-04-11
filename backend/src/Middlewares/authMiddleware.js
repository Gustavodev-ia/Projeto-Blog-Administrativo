const jwt = require("jsonwebtoken")

require("dotenv").config()


module.exports = (req,res,next) =>{
    const token = req.header('Authorization')
    if(!token) return res.status(401).json({error:'Acesso Negado!'})

        try {
            const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET,{ expiresIn: '1h' });
            req.user = decoded;
            next();
          } catch (error) {
            res.status(400).json({ error: 'Token inválido' });
          }
}

