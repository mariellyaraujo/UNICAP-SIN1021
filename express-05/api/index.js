const express = require("express");
const cors = require("cors");
const db = require("./models"); 
const routes = require("./routes"); 
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes); 

db.sequelize.sync({ alter: true }).then(() => {
  console.log("Banco de dados sincronizado e tabelas criadas!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("API rodando!");
});