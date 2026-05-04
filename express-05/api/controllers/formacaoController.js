const { Formacao } = require("../models");

module.exports = {
  async criar(req, res) {
    try {
      const formacao = await Formacao.create(req.body);
      return res.status(201).json(formacao);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  },

  async listar(req, res) {
    try {
      const formacoes = await Formacao.findAll();
      return res.status(200).json(formacoes);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      await Formacao.update(req.body, { where: { id } });
      const atualizada = await Formacao.findByPk(id);
      return res.status(200).json(atualizada);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  },

  async excluir(req, res) {
    try {
      await Formacao.destroy({ where: { id: req.params.id } });
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }
};