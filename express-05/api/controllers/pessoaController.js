const { Pessoa, Experiencia, Formacao } = require("../models");

module.exports = {
  async criar(req, res) {
    try {
      const pessoa = await Pessoa.create(req.body);
      return res.status(201).json(pessoa);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  },

  async listar(req, res) {
    try {
      const pessoas = await Pessoa.findAll();
      return res.status(200).json(pessoas);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  },

  async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const pessoa = await Pessoa.findByPk(id, {
        include: [
          { model: Experiencia, as: "experiencias" },
          { model: Formacao, as: "formacoes" }
        ]
      });
      if (!pessoa) return res.status(404).json({ mensagem: "Pessoa não encontrada" });
      return res.status(200).json(pessoa);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      await Pessoa.update(req.body, { where: { id } });
      const atualizado = await Pessoa.findByPk(id);
      return res.status(200).json(atualizado);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  },

  async excluir(req, res) {
    try {
      await Pessoa.destroy({ where: { id: req.params.id } });
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }
};