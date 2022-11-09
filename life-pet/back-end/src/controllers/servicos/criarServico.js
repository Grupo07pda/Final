const criarServico= async(req,res)=>{
    try {
            const db = require('../../connection/db');
            const servico = require('../../models/servico');

            await db.sync();
            const{nome_animal, servicos, porte, especie, nome_dono, cpf, telefone, horario} = req.body;
            const  { id } = req.params
            // validando horario 
            
            const servicosExistente = await servico.findOne({where: {
                horario: horario
            }});
            if(servicosExistente){
                return res.json({mensagemError: "Horário já existente!!!"})
            }
            console.log('idUsuario', id);
            const novoServico = await servico.create({
                nome_animal,
                servicos,
                porte,
                especie,
                nome_dono,
                cpf,
                telefone,
                horario,
                idUsuario: id
            });
            console.log(novoServico)
            return res.status(201).json({servico:novoServico});   
        }catch(error){
            return res.status(500).json({mensagemError: error});
}
}

module.exports = criarServico;