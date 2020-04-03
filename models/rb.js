module.exports = function (sequelize, DataTypes) {
  var rb = sequelize.define(
    "rb", {
      rank: DataTypes.INTEGER,
      name: DataTypes.STRING,
      team: DataTypes.STRING,
      position: DataTypes.STRING,
      rushingAttempts: DataTypes.INTEGER,
      rushingYards: DataTypes.INTEGER,
      rushingTouchdowns: DataTypes.INTEGER,
      receptions: DataTypes.INTEGER,
      receivingYards: DataTypes.INTEGER,
      receivingTouchdowns: DataTypes.INTEGER
    }, {
      timestamps: false
    }
  );
  return rb;
};