const express = require("express")
const router = express.Router()

const {buscarProdutos, buscarProduto} = require('../DAO/produto/buscar_produto.js')
const {incluirProduto} = require('../DAO/produto/inserir_produto.js')

router.get('/produtos', async (req, res) =>{
    let clientes = await buscarProdutos()
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