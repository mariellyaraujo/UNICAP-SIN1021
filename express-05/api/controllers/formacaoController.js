const { Formacao } = require("../models");

module.exports = {
  async criar(req, res) {
    try {
    
      const formacao = await Formacao.create(req.body);
      return res.status(201).json(formacao);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  }
};