const express = require("express");
const db = require("./api/models"); 
const app = express();

app.use(express.json());

db.sequelize.sync({ alter: true }).then(() => {
  console.log("Banco de dados sincronizado e tabelas criadas!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});