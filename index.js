const express = require("express")
const handlebars = require("express-handlebars")

const app = express()

const porta = process.env.PORT = 8000

require("module-alias/register")

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    defaultLayout: 'main'
}))

// CONFIG DATABASE
const client = require("./database/postgresql")
client.connect()

// ROTAS DA API

const precosRoutes = require("./routes/precosRoutes")

app.use("/precos", precosRoutes)

app.get('/', (req, res) =>{
    res.status(200).json({message: 'Preço da Gasolina e Etanol'})
})

app.listen(porta, ()=>{
    console.log("Servidor rodando em http://localhost:8000")
})