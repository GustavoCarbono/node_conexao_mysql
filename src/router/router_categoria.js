const express = require("express")
const router = express.Router()

const {buscarCategorias, buscarCategoria} = require('../DAO/categoria/buscar_categoria.js')
const {incluirCategoria} = require('../DAO/categoria/inserir_categoria.js')

router.get('/categorias', async (req, res) =>{
    let categorias = await buscarCategorias()
    res.json(categorias)
})

router.get('/:codigo', async (req, res) =>{
    let codigo = parseInt( req.params.codigo)
    let categoria = await buscarCategoria(codigo)
    res.json(categoria)
})

router.post('/', async (req, res) =>{
    let {id, nome} = req.body
    const infos = [id, nome]
    let result = await incluirCategoria(infos)
    res.json(result)
})

module.exports = router