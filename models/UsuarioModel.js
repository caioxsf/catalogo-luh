const Database = require('../utils/database');
const db = new Database();

class UsuarioModel {

    #id
    #usuario
    #senha

    constructor(id,usuario,senha) {
        this.#id = id;
        this.#usuario = usuario;
        this.#senha = senha;
    }

    get id () {return this.#id} set id (value) {this.#id = value}
    get usuario () {return this.#usuario} set usuario (value) {this.#usuario = value}
    get senha () {return this.#senha} set senha (value) {this.#senha = value}
    
    async obter (id) {
        let sql = `select * from usuarios where user_id = ?`
        let valores = [id];
        let row = await db.ExecutaComando(sql,valores)
        if(row.length > 0) {
            return new UsuarioModel(
                row[0]['user_id'],
                row[0]['user_usuario'],
                row[0]['user_senha']
            )
        }
        return null
    }

    async validarUsuario (usuario,senha) {
        let sql = `select * from usuarios where user_usuario = ? and user_senha = ?`;
        let valores = [usuario,senha];
        let row = await db.ExecutaComando(sql,valores);
        if(row.length > 0) {
            return new UsuarioModel (row[0]['user_id'],row[0]['user_usuario'],row[0]['user_senha']);
        }
        return null;
    }

}

module.exports = UsuarioModel