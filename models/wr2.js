module.exports = function (sequelize, DataTypes) {
  var wr2 = sequelize.define(
    "wr2", {
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
  return wr2;
};