const {conexao} = require('../conexao.js')

async function editarIntegralmenteEndereco(infos, codigo){

    const sql = `UPDATE tbl_endereco SET telefone = ?, nome = ?, limite = ?, id_endereco = ?, id_status = ? WHERE id = ${codigo} ;`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql,[...infos]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

module.exports = {editarIntegralmenteEndereco}