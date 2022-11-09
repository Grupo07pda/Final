const express = require('express');
const servicoRoutes = express.Router();
const criarServico= require("../controllers/servicos/criarServico");
const pegarServico = require("../controllers/servicos/pegarServico");
const alterar = require("../controllers/servicos/alterarServ")
const deletar = require("../controllers/servicos/deletarServ")

servicoRoutes.post('/servico/:id',criarServico);
servicoRoutes.get('/servico',pegarServico);
servicoRoutes.put('/servico/:id',alterar);
servicoRoutes.delete('servico/id',deletar)

module.exports = servicoRoutes;