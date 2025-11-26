const db = require('../models/index');
const config = require('../config/config');
const usuarioModel = require('../models/usuario')(db.sequelize, db.Sequelize);
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


async function register(usuario) {
    const saltRounds = 10;
    console.log(usuario);
    console.log(usuario.contrasena);
    console.log("JSBDOUBJBJOAUDB")
    usuario.contrasena = await bcrypt.hash(usuario.contrasena, saltRounds);
    console.log(usuario);
    console.log(usuario.contrasena);
    const usuarioCreado = await usuarioModel.create(usuario);
    return { usuarioCreado, status:200 }
}

async function login(usuario) {

    let status;
    let usuarioEncontrado = await usuarioModel.findOne({ where: usuario, raw:true }).then(async (usuario)=>{

        if(usuario){

            delete usuario['contrasena'];
            delete usuario['apellido_materno'];
            delete usuario['apellido_paterno'];

            const token = jwt.sign({
                data: usuario
            }, config.key, { algorithm: 'HS256' });

            status = 200;
            return {token:token};

        }else{
            status = 404;
            return {msg:'usuario no encontrado'};
        }

    });

    return {usuarioEncontrado, status};
}

module.exports = {
    register,
    login,
}