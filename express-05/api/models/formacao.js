const getFormacaoModel = (sequelize, Sequelize) => {
  const Formacao = sequelize.define(
    "Formacao",
    {
      id: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      curso: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      instituicao: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      anoConclusao: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "formacoes",
      timestamps: true,
    }
  );

  Formacao.associate = (models) => {
    Formacao.belongsTo(models.Pessoa, { 
      foreignKey: "pessoaId", 
      as: "pessoa" 
    });
  };

  return Formacao;
};

module.exports = getFormacaoModel;