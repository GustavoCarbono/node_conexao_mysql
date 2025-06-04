const express = require("express")
const router = express.Router()

const {buscarEnderecos, buscarEndereco} = require('../DAO/endereco/buscar_endereco.js')
const {incluirEndereco} = require('../DAO/endereco/inserir_endereco.js')

router.get('/enderecos', async (req, res) =>{
    let enderecos = await buscarEnderecos()
    res.json(enderecos)
})

router.get('/:codigo', async (req, res) =>{
    let codigo = parseInt( req.params.codigo)
    let endereco = await buscarEndereco(codigo)
    res.json(endereco)
})

router.post('/', async (req, res) =>{
    let {id, logradouro, cep, numero, bairro,  cidade} = req.body
    const infos = [id, logradouro, cep, numero, bairro,  cidade]
    let result = await incluirEndereco(infos)
    res.json(result)
})

module.exports = router