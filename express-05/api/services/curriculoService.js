const { Pessoa, Experiencia, Formacao } = require("../models");

class CurriculoService {
  async criarPessoa(dados) {
    return await Pessoa.create(dados);
  }

  async adicionarExperiencia(dados) {
    return await Experiencia.create(dados);
  }

  async adicionarFormacao(dados) {
    return await Formacao.create(dados);
  }


  async buscarCompleto(id) {
    return await Pessoa.findByPk(id, {
      include: [
        { model: Experiencia, as: "experiencias" },
        { model: Formacao, as: "formacoes" }
      ]
    });
  }

  async listarTodos() {
    return await Pessoa.findAll();
  }

  async deletarPessoa(id) {
    return await Pessoa.destroy({ where: { id } });
  }
}

module.exports = new CurriculoService();