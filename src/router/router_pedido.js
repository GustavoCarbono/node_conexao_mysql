const express = require("express")
const router = express.Router()

const {buscarPedidos, buscarPedido} = require('../DAO/pedido/buscar_pedido.js')
const {incluirPedido} = require('../DAO/pedido/inserir_pedido.js')

router.get('/pedidos', async (req, res) =>{
    let clientes = await buscarPedidos()
    res.json(clientes)
})

router.get('/:codigo', async (req, res) =>{
    let codigo = parseInt( req.params.codigo)
    let cliente = await buscarPedido(codigo)
    res.json(cliente)
})

router.post('/', async (req, res) =>{
    let {numero, data_elaboracao, cliente_id} = req.body
    const infos = [numero, data_elaboracao, cliente_id]
    let result = await incluirPedido(infos)
    res.json(result)
})

module.exports = {router}