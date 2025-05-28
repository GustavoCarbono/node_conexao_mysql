const express = require("express")
const router = express.Router()

const {buscarItemPedido, buscarItemPedido} = require('../itempedido/buscar_itempedido.js')
const {incluirItemPedido} = require('../itempedido/inserir_itempedido.js')

router.get('/itempedidos', async (req, res) =>{
    let clientes = await buscarItemPedido()
    res.json(clientes)
})

router.get('/:codigo', async (req, res) =>{
    let codigo = parseInt( req.params.codigo)
    let cliente = await buscarItemPedido(codigo)
    res.json(cliente)
})

router.post('/', async (req, res) =>{
    let {id, id_pedido, id_produto, qnt} = req.body
    const infos = [id, id_pedido, id_produto, qnt]
    let result = await incluirItemPedido(infos)
    res.json(result)
})

module.exports = {router}