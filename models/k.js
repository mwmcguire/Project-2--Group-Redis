module.exports = function (sequelize, DataTypes) {
  var k = sequelize.define(
    "k", {
      rank: DataTypes.INTEGER,
      name: DataTypes.STRING,
      team: DataTypes.STRING,
      position: DataTypes.STRING,
      fga: DataTypes.INTEGER,
      fgm: DataTypes.INTEGER,
      fgp: DataTypes.DECIMAL,
      epa: DataTypes.INTEGER,
      epm: DataTypes.INTEGER,
      epp: DataTypes.DECIMAL
    }, {
      timestamps: false
    }
  );
  return k;
};