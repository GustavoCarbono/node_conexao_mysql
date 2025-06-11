const {conexao} = require('../conexao.js')


async function buscarStatuss(){
    const sql = `SELECT * FROM tbl_status;`
    
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

async function buscarStatus(codigo){
    const sql = `SELECT * FROM tbl_status WHERE id = ?`
    
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


module.exports = {buscarStatuss, buscarStatus}