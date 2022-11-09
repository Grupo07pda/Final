const {compare} = require('bcrypt');

const login = async(req,res)=>{

    try{
        let usuario = require('../../models/usuario');
        const {email, senha} = req.body;
        const usuarioExistente = await usuario.findOne({where: {email: email}});
        console.log(usuarioExistente)

        if(!usuarioExistente){
            return res.status(401).json({mensagemError: "Email ou senha invalido"});
        }
        console.log(usuarioExistente.senha)
        const senhaMatch = await compare(senha,usuarioExistente.senha);
        console.log(senhaMatch)
        if(!senhaMatch){
            return res.status(401).json({mensagemError: "Email ou senha invalido"});
        }

        await usuario.update({
            id: usuarioExistente.id,
            nome: usuarioExistente.nome || usuarioExistente.nome,
            email: usuarioExistente.email || usuarioExistente.email,
            senha: usuarioExistente.senha|| usuarioExistente.senha,
            logado:true
        }, { where: { id: usuarioExistente.id }});
        const usuarioAtualizado = await usuario.findByPk(usuarioExistente.id);  
        return res.status(200).json({usuario:usuarioAtualizado});

    }catch(error){
        return res.status(500).json({mensagemError: error});
    }
}

module.exports = login;