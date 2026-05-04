const getExperienciaModel = (sequelize, Sequelize) => {
  const Experiencia = sequelize.define(
    "Experiencia",
    {
      id: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      cargo: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      empresa: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      // O Sequelize vai criar o pessoaId automaticamente por causa do relacionamento
    },
    {
      tableName: "experiencias",
      timestamps: true,
    }
  );

  
  Experiencia.associate = (models) => {
    Experiencia.belongsTo(models.Pessoa, { 
      foreignKey: "pessoaId", 
      as: "pessoa" 
    });
  };

  return Experiencia;
};

module.exports = getExperienciaModel;