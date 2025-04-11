const express = require("express")
const db = require("./config/database")
const user = require("./Models/User")
const post = require("./Models/Post")
const app = express()
const routes = require("./routes/userRoutes")

require("dotenv").config()

app.use(express.json())
app.use(routes)



db.sync({force:true}).then(()=>{
    console.log("Banco sincronizado!")
})

app.listen(process.env.PORT,()=>{
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
})