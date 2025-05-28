const express = require("express")
const router = express.Router()

const {buscarStatuss, buscarStatus} = require('../status/buscar_status.js')
const {incluirStatus} = require('../status/inserir_status.js')

router.get('/statuss', async (req, res) =>{
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

module.exports = {router}