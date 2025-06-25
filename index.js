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


app.use('/cliente', routerCliente)
app.use('/categoria', routerCategoria)
app.use('/endereco', routerEndereco)
app.use('/itempedido', routerItemPedido)
app.use('/pedido', routerPedido)
app.use('/produto', routerProduto)
app.use('/status', routerStatus)

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