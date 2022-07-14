const router = require("express").Router()
const client = require("../database/postgresql")

router.get("/", (req, res)=>{
    
    client.query("SELECT * FROM precos").then(results =>{
        let resultado = results.rows
        res.status(200).json(resultado)
        return
    })
})

router.get("/produto/:produto", (req, res) =>{
    let produto = String(req.params.produto).toUpperCase()

    if (produto == "GASOLINA-ADITIVADA") {
        produto = "GASOLINA ADITIVADA"
    }

    client.query("SELECT * FROM precos WHERE produto = '" + produto + "'").then(results =>{
        let resultado = results.rows

        if (resultado == '') {
            res.status(404).json({error: "O produto não foi encontrado!"})
            return
        }else{
            res.status(200).json(resultado)
            return
        }


    })
})

router.get("/regiao/:regiao", (req, res) =>{

    client.query("SELECT * FROM precos WHERE sigla_regiao = '" + String(req.params.regiao).toUpperCase() + "'").then(results =>{
        let resultado = results.rows
        
        if (resultado == '') {
            res.status(404).json({error: "A região não foi encontrada!"})
            return
        }else{
            res.status(200).json(resultado)
            return
        }
    })
})

router.get("/estado/:estado", (req, res) =>{

    client.query("SELECT * FROM precos WHERE sigla_estado = '" + String(req.params.estado).toUpperCase() + "'").then(results =>{
        let resultado = results.rows
        
        if (resultado == '') {
            res.status(404).json({error: "O estado não foi encontrado!"})
            return
        }else{
            res.status(200).json(resultado)
            return
        }

    })
})



router.get("/municipio/:municipio", (req, res) =>{

    client.query("SELECT * FROM precos WHERE municipio = '" + String(req.params.municipio).toUpperCase() + "'").then(results =>{
        let resultado = results.rows
        
        if (resultado == '') {
            res.status(404).json({error: "O município não foi encontrado!"})
            return
        }else{
            res.status(200).json(resultado)
            return
        }

    })
})

router.get("/cep/:cep", (req, res) =>{

    client.query("SELECT * FROM precos WHERE cep = '" + String(req.params.cep).replace(/(\d{5})?(\d{3})/, "$1-$2") + "'").then(results =>{
        let resultado = results.rows
        
        if (resultado == '') {
            res.status(404).json({error: "O CEP não foi encontrado!"})
            return
        }else{
            res.status(200).json(resultado)
            return
        }

    })
})



module.exports = router

