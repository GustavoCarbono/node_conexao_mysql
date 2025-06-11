const express = require("express")
const router = express.Router()

const {deletarCategoria } = require('../DAO/categoria/deletar_categoria.js')
const {buscarCategorias, buscarCategoria} = require('../DAO/categoria/buscar_categoria.js')
const {incluirCategoria} = require('../DAO/categoria/inserir_categoria.js')

router.get('/', async (req, res) =>{
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

router.put('/', async (req, res) =>{
    let {id, nome} = req.body
    const infos = [id, nome]
    let result = await editarIntegralmenteCategoria(infos, codigo)
    res.status(200).json(result)
})

router.patch('/', async (req, res) =>{
    let {codigo, campo, valor } = req.body
    let result = await editarParcialmenteCategoria(codigo, campo, valor)
    res.status(200).json(result)
})

router.delete('/', async (req, res) =>{
    let { codigo } = req.body
    let result = await deletarCategoria(codigo)
    res.json(result)
})

module.exports = router