module.exports = function (sequelize, DataTypes) {
  var te = sequelize.define(
    "te", {
      rank: DataTypes.INTEGER,
      name: DataTypes.STRING,
      team: DataTypes.STRING,
      position: DataTypes.STRING,
      Receptions: DataTypes.INTEGER,
      receivingYards: DataTypes.INTEGER,
      receivingTouchdowns: DataTypes.INTEGER,
      yardsPerReception: DataTypes.DECIMAL,
      receptionsPerGame: DataTypes.DECIMAL,
      receivingYardsPerGame: DataTypes.DECIMAL
    }, {
      timestamps: false
    }
  );
  return te;
};