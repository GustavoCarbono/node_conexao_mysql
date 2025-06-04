const express = require("express")
const router = express.Router()

const {buscarClientes, buscarCliente} = require('../DAO/cliente/buscar_cliente.js')
const {incluirCliente} = require('../DAO/cliente/inserir_cliente.js')

router.get('/', async (req, res) =>{
    let clientes = await buscarClientes()
    res.json(clientes)
})

router.get('/:codigo', async (req, res) =>{
    let codigo = parseInt( req.params.codigo)
    let cliente = await buscarCliente(codigo)
    res.json(cliente)
})

router.post('/', async (req, res) =>{
    let {codigo, nome, limite, telefone, id_endereco, id_status} = req.body
    const infos = [codigo, nome, telefone, limite, id_endereco, id_status]
    let result = await incluirCliente(infos)
    res.json(result)
})

module.exports = router