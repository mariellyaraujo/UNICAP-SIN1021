const { Experiencia } = require("../models");

module.exports = {
  async criar(req, res) {
    try {
     
      const experiencia = await Experiencia.create(req.body);
      return res.status(201).json(experiencia);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  }

};