const { Experiencia } = require("../models");

module.exports = {
  async criar(req, res) {
    try {
      const experiencia = await Experiencia.create(req.body);
      return res.status(201).json(experiencia);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  },

  async listar(req, res) {
    try {
      const experiencias = await Experiencia.findAll();
      return res.status(200).json(experiencias);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      await Experiencia.update(req.body, { where: { id } });
      const atualizado = await Experiencia.findByPk(id);
      return res.status(200).json(atualizado);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  },

  async excluir(req, res) {
    try {
      await Experiencia.destroy({ where: { id: req.params.id } });
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }
};