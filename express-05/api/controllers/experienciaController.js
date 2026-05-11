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
    const { id } = req.params;

    const deletado = await Experiencia.findByPk(id);

    if (!deletado) {
      return res.status(404).json({
        erro: "Experiência não encontrada"
      });
    }

    await deletado.destroy();

    return res.status(200).json({
      sucesso: true
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      erro: error.message
    });
  }
}
};