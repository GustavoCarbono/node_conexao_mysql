const express = require("express")
const router = express.Router()

const { deletarProduto } = require('../DAO/produto/deletar_produto.js')
const {buscarProdutos, buscarProduto} = require('../DAO/produto/buscar_produto.js')
const {incluirProduto} = require('../DAO/produto/inserir_produto.js')
const { editarParcialmenteProduto } = require('../DAO/produto/editar_parcialmente_produto.js')
const { editarIntegralmenteProduto } = require('../DAO/produto/editar_integralmente_produto.js')

router.get('/', async (req, res) =>{
    let Produtos = await buscarProdutos()
    res.json(Produtos)
})

router.get('/:codigo', async (req, res) =>{
    let codigo = parseInt( req.params.codigo)
    let Produto = await buscarProduto(codigo)
    res.json(Produto)
})

router.post('/', async (req, res) =>{
    let {codigo, nome, id_categoria, preco} = req.body
    const infos = [codigo, nome, id_categoria, preco]
    let result = await incluirProduto(infos)
    res.json(result)
})

router.put('/', async (req, res) =>{
    let {codigo, nome, id_categoria, preco} = req.body
    const infos = [codigo, nome, id_categoria, preco]
    let result = await editarIntegralmenteProduto(infos, codigo)
    res.status(200).json(result)
})

router.patch('/', async (req, res) =>{
    let {codigo, campo, valor } = req.body
    let result = await editarParcialmenteProduto(codigo, campo, valor)
    res.status(200).json(result)
})

router.delete('/', async (req, res) =>{
    let { codigo } = req.body
    let result = await deletarProduto(codigo)
    res.json(result)
})

module.exports = router