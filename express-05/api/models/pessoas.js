const getPessoaModel = (sequelize, Sequelize) => {
  const Pessoa = sequelize.define(
    "Pessoa",
    {
      id: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      resumo: {
        type: Sequelize.DataTypes.TEXT,
      },
    },
    {
      tableName: "pessoas",
      timestamps: true,
    }
  );


  Pessoa.associate = (models) => {
    Pessoa.hasMany(models.Experiencia, { 
      foreignKey: "pessoaId", 
      as: "experiencias" 
    });

    Pessoa.hasMany(models.Formacao, { 
      foreignKey: "pessoaId", 
      as: "formacoes" 
    });
  };

  return Pessoa;
};

module.exports = getPessoaModel;