const express = require("express")
const router = express.Router()

const { deletarPedido } = require('../DAO/pedido/deletar_pedido.js')
const { buscarPedidos, buscarPedido } = require('../DAO/pedido/buscar_pedido.js')
const { incluirPedido } = require('../DAO/pedido/inserir_pedido.js')
const { editarParcialmentePedido } = require('../DAO/pedido/editar_parcialmente_pedido.js')
const { editarIntegralmentePedido } = require('../DAO/pedido/editar_integralmente_pedido.js')

router.get('/', async (req, res) =>{
    try {
        let Pedidos = await buscarPedidos();
        res.json(Pedidos);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar pedidos" });
    }
})

router.get('/:codigo', async (req, res) =>{
    let codigo = parseInt( req.params.codigo)
    let Pedido = await buscarPedido(codigo)
    res.json(Pedido)
})

router.post('/', async (req, res) =>{
    let {numero, data_elaboracao, cliente_id} = req.body
    const infos = [numero, data_elaboracao, cliente_id]
    let result = await incluirPedido(infos)
    res.json(result)
})

router.put('/', async (req, res) =>{
    let {numero, data_elaboracao, cliente_id} = req.body
    const infos = [numero, data_elaboracao, cliente_id]
    let result = await editarIntegralmentePedido(infos, codigo)
    res.status(200).json(result)
})

router.patch('/', async (req, res) =>{
    let {codigo, campo, valor } = req.body
    let result = await editarParcialmentePedido(codigo, campo, valor)
    res.status(200).json(result)
})

router.delete('/', async (req, res) =>{
    let { codigo } = req.body
    let result = await deletarPedido(codigo)
    res.json(result)
})

module.exports = router