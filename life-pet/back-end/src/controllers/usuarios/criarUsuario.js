const { hash } = require("bcrypt");
const criando = async (req,res)=> {
    try {
            console.log(req.body);
            const db= require('../../connection/db');
            const user = require ('../../models/usuario');
            await db.sync();
            const{nome,email,senha}= req.body
            console.log(req.body)
            const senhaHash=  await hash(senha,8);
            const newuser = await user.create({
                nome,email, senha:senhaHash
            });
            console.log(newuser);
            return res.status(201).json({user:newuser})
        }catch(error){
            return res.status(500).json({mensagenError: error});
        }
}

module.exports = criando;