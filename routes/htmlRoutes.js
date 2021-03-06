var db = require('../models');

var playerMap = {
  qb: {
    stat1: 'Passing Yards',
    stat2: 'Passing Touchdowns',
    stat3: 'Interceptions',
    stat4: 'Completion Percentage',
    stat5: 'Rushing Yards',
    stat6: 'Rushing Touchdowns',
  },
  rb: {
    stat1: 'Rushing Attempts',
    stat2: 'Rushing Yards',
    stat3: 'Rushing Touchdowns',
    stat4: 'Receptions',
    stat5: 'Receiving Yards',
    stat6: 'Receiving Touchdowns',
  },
  wr: {
    stat1: 'Receptions',
    stat2: 'Receiving Yards',
    stat3: 'Receiving Touchdowns',
    stat4: 'Yards Per Reception',
    stat5: 'Receptions Per Game',
    stat6: 'Receiving Yards Per Game',
  },
  wr2: {
    stat1: 'Receptions',
    stat2: 'Receiving Yards',
    stat3: 'Receiving Touchdowns',
    stat4: 'Yards Per Reception',
    stat5: 'Receptions Per Game',
    stat6: 'Receiving Yards Per Game',
  },
  te: {
    stat1: 'Receptions',
    stat2: 'Receiving Yards',
    stat3: 'Receiving Touchdowns',
    stat4: 'Yards Per Reception',
    stat5: 'Receptions Per Game',
    stat6: 'Receiving Yards Per Game',
  },
  k: {
    stat1: 'Field Goal Attempts',
    stat2: 'Field Goals Made',
    stat3: 'Field Goal Percentage',
    stat4: 'Extra Point Attempts',
    stat5: 'Extra Points Made',
    stat6: 'Extra Points Percentage',
  },
  dst: {
    stat1: 'Tackles',
    stat2: 'Sacks',
    stat3: 'Interceptions',
    stat4: 'Interception TDs',
    stat5: 'Forced Fumbles',
    stat6: 'FF Touchdowns',
  },
};

module.exports = function(app) {
  // Load index page
  app.get('/', function(req, res) {
    res.sendFile(__dirname, '../index.html');
  });

  // Get player data
  app.get('/players/table/:position', function(req, res) {
    var position = req.params.position; // QB // RB // WR // TE // K // DST
    db[position].findAll({}).then(function(results) {
      console.log(results);
      res.render('partials/' + position, {
        layout: false,
        stat1: playerMap[position].stat1,
        stat2: playerMap[position].stat2,
        stat3: playerMap[position].stat3,
        stat4: playerMap[position].stat4,
        stat5: playerMap[position].stat5,
        stat6: playerMap[position].stat6,
        players: results,
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get('*', function(req, res) {
    res.render('404');
  });
};
