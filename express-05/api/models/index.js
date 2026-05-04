const Sequelize = require("sequelize");
const sequelize = require("../config/database"); 

const db = {};


db.Pessoa = require("./pessoas")(sequelize, Sequelize);
db.Experiencia = require("./experiencias")(sequelize, Sequelize);
db.Formacao = require("./formacoes")(sequelize, Sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;