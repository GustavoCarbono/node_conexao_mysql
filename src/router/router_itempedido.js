const express = require("express")
const router = express.Router()

const { deletarItemPedido } = require('../DAO/itempedido/deletar_itempedido.js')
const {buscarItemPedidos, buscarItemPedido} = require('../DAO/itempedido/buscar_itempedido.js')
const {incluirItemPedido} = require('../DAO/itempedido/inserir_itempedido.js')

router.get('/', async (req, res) =>{
    let ItemPedidos = await buscarItemPedidos()
    res.json(ItemPedidos)
})

router.get('/:codigo', async (req, res) =>{
    let codigo = parseInt( req.params.codigo)
    let ItemPedido = await buscarItemPedido(codigo)
    res.json(ItemPedido)
})

router.post('/', async (req, res) =>{
    let {id, id_pedido, id_produto, qnt} = req.body
    const infos = [id, id_pedido, id_produto, qnt]
    let result = await incluirItemPedido(infos)
    res.json(result)
})

router.put('/', async (req, res) =>{
    let {id, id_pedido, id_produto, qnt} = req.body
    const infos = [id, id_pedido, id_produto, qnt]
    let result = await editarIntegralmenteItemPedido(infos, codigo)
    res.status(200).json(result)
})

router.patch('/', async (req, res) =>{
    let {codigo, campo, valor } = req.body
    let result = await editarParcialmenteItemPedido(codigo, campo, valor)
    res.status(200).json(result)
})

router.delete('/', async (req, res) =>{
    let { codigo } = req.body
    let result = await deletarItemPedido(codigo)
    res.json(result)
})

module.exports = router