require("dotenv").config();
const Sequelize = require("sequelize");

const getPessoaModel = require("./pessoas");
const getExperienciaModel = require("./experiencias");
const getFormacaoModel = require("./formacoes");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  dialectModule: require("pg"),
  logging: false,
});

const models = {

  Pessoa: getPessoaModel(sequelize, Sequelize),
  Experiencia: getExperienciaModel(sequelize, Sequelize),
  Formacao: getFormacaoModel(sequelize, Sequelize),
};

Object.keys(models).forEach((key) => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});

module.exports = { sequelize, ...models };