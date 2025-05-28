const express = require("express")
const router = express.Router()

const {buscarProduto, buscarProduto} = require('../produto/buscar_produto.js')
const {incluirProduto} = require('../produto/inserir_produto.js')

router.get('/produtos', async (req, res) =>{
    let clientes = await buscarProduto()
    res.json(clientes)
})

router.get('/:codigo', async (req, res) =>{
    let codigo = parseInt( req.params.codigo)
    let cliente = await buscarProduto(codigo)
    res.json(cliente)
})

router.post('/', async (req, res) =>{
    let {codigo, nome, id_categoria, preco} = req.body
    const infos = [codigo, nome, id_categoria, preco]
    let result = await incluirProduto(infos)
    res.json(result)
})

module.exports = {router}