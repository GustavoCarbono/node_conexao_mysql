const {conexao} = require('../conexao.js')


async function buscarCategorias(){
    const sql = `SELECT * FROM tbl_categorias;`
    
    const conn = await conexao()
    try {
        // Executar a consulta
        const [rows, fields] = await conn.query(sql);
        await conn.end()
        return rows
      } catch (err) {
        return err.message
      }
}

async function buscarCategoria(codigo){
    const sql = `SELECT * FROM tbl_categoria WHERE id = ?`
    
    const conn = await conexao() 
    
    try {
        // Executar a consulta
        const [rows, fields] = await conn.query(sql, [codigo]);
        await conn.end()
        return rows
      } catch (err) {
        return err.message
      }
}


module.exports = {buscarCategorias, buscarCategoria}