const express = require("express")
const handlebars = require("express-handlebars")

const app = express()

const porta = process.env.PORT = 8000

require("module-alias/register")

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))


// CONFIG. HANDLEBARS 
app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")


// CONFIG. DATABASE
const client = require("./database/postgresql")
client.connect()



// ROTAS DA API
const precosRoutes = require("./routes/precosRoutes")

app.use("/precos", precosRoutes)

app.get('/', (req, res) =>{
    res.render("index")
})




app.listen(porta, ()=>{
    console.log("Servidor rodando em http://localhost:8000")
})