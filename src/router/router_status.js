const express = require("express")
const router = express.Router()

const { deletarStatus } = require('../DAO/status/deletar_status.js')
const {buscarStatuss, buscarStatus} = require('../DAO/status/buscar_status.js')
const { editarParcialmenteStatus } = require('../DAO/status/editar_parcialmente_status.js')
const { editarIntegralmenteStatus } = require('../DAO/status/editar_integralmente_status.js')

router.get('/', async (req, res) =>{
    let statuss = await buscarStatuss()
    res.json(statuss)
})

router.get('/:codigo', async (req, res) =>{
    let codigo = parseInt( req.params.codigo)
    let status = await buscarStatus(codigo)
    res.json(status)
})

router.post('/', async (req, res) =>{
    let {id, nome} = req.body
    const infos = [id, nome]
    let result = await incluirStatus(infos)
    res.json(result)
})

router.put('/', async (req, res) =>{
    let {id, nome} = req.body
    const infos = [id, nome]
    let result = await editarIntegralmenteStatus(infos, codigo)
    res.status(200).json(result)
})

router.patch('/', async (req, res) =>{
    let {codigo, campo, valor } = req.body
    let result = await editarParcialmenteStatus(codigo, campo, valor)
    res.status(200).json(result)
})

router.delete('/', async (req, res) =>{
    let { codigo } = req.body
    let result = await deletarStatus(codigo)
    res.json(result)
})

module.exports = router