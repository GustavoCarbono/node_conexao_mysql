const express = require("express")
const router = express.Router()

const { deletarEndereco } = require('../DAO/endereco/deletar_endereco.js')
const {buscarEnderecos, buscarEndereco} = require('../DAO/endereco/buscar_endereco.js')
const {incluirEndereco} = require('../DAO/endereco/inserir_endereco.js')

router.get('/', async (req, res) =>{
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

router.put('/', async (req, res) =>{
    let {id, logradouro, cep, numero, bairro,  cidade} = req.body
    const infos = [id, logradouro, cep, numero, bairro,  cidade]
    let result = await editarIntegralmenteEndereco(infos, codigo)
    res.status(200).json(result)
})

router.patch('/', async (req, res) =>{
    let {codigo, campo, valor } = req.body
    let result = await editarParcialmenteEndereco(codigo, campo, valor)
    res.status(200).json(result)
})

router.delete('/', async (req, res) =>{
    let { codigo } = req.body
    let result = await deletarEndereco(codigo)
    res.json(result)
})

module.exports = router