const {conexao} = require('../conexao.js')

async function editarParcialmenteStatus(codigo, campo, valor){
    const data = [valor, codigo]
    
    const colunasPermitidas = ['id', 'nome']; // Adicione as colunas permitidas
    if (!colunasPermitidas.includes(campo)) {
        throw new Error('Coluna inválida');
    }

    const sql = `UPDATE tbl_status set ${campo} = ? WHERE id = ? ;`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql, data);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

module.exports = {editarParcialmenteStatus}