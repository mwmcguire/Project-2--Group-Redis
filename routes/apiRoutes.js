var db = require("../models");

module.exports = function (app) {
  // Post to roster
  app.post("/api/roster", function (req, res) {
    db.Roster.create(req.body).then(function (result) {
      res.json(result);
    });
  });

  app.get("/api/roster", function (req, res) {
    db.Roster.findAll({}).then(function (results) {
      res.json(results);
    });
  });
};