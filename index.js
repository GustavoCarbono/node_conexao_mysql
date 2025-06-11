const express = require('express')
const env = require('dotenv')

const routerCliente = require('./src/router/router_cliente.js')
const routerCategoria = require('./src/router/router_categoria.js')
const routerEndereco = require('./src/router/router_endereco.js')
const routerItemPedido = require('./src/router/router_itempedido.js')
const routerPedido = require('./src/router/router_pedido.js')
const routerProduto = require('./src/router/router_produto.js')
const routerStatus = require('./src/router/router_status.js')
const {conexao, closeConexao, testarConexao} = require('./src/DAO/conexao.js')

const app = express()
env.config()

app.use('/firma/1.0.0/cliente', routerCliente)
app.use('/firma/1.0.0/categoria', routerCategoria)
app.use('/firma/1.0.0/endereco', routerEndereco)
app.use('/firma/1.0.0/itempedido', routerItemPedido)
//app.use('/firma/1.0.0/pedido', routerPedido)
//app.use('/firma/1.0.0/produto', routerProduto)
//app.use('/firma/1.0.0/status', routerStatus)

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