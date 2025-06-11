const {conexao} = require('../conexao.js')

async function deletarPedido(codigo){
    
    const sql = `DELETE FROM tbl_pedido WHERE numero = ?`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql,[codigo]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

module.exports = {deletarPedido}