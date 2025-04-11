const express = require("express")
const db = require("./config/database")
const user = require("./Models/User")
const app = express()

require("dotenv").config()

app.use(express.json())


db.sync().then(()=>{
    console.log("Banco sincronizado!")
})

app.listen(process.env.PORT,()=>{
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
})