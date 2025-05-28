const express = require('express')
const env = require('dotenv')

const routerCliente = require('./src/DAO/router/router_cliente.js')
const routerCategoria = require('./src/DAO/router/router_categoria.js')
const routerEndereco = require('./src/DAO/router/router_endereco.js')
const routerItemPedido = require('./src/DAO/router/router_itempedido.js')
const routerPedido = require('./src/DAO/router/router_pedido.js')
const routerProduto = require('./src/DAO/router/router_produto.js')
const routerStatus = require('./src/DAO/router/router_status.js')
const {conexao, closeConexao, testarConexao} = require('./src/DAO/conexao.js')

app.use('/cliente', routerCliente)

const app = express()
env.config()

app.use(
    express.urlencoded({
        extended: true
    })
  )
  
  app.use(express.json())
  


app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(process.env.PORTA, () => {
    console.log(`Operando na porta ${process.env.PORTA}`), 
    testarConexao(conexao())
})