var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // var story = ["Once", "upon", "a", "time", "Bartholomew", "went", "home", ".", "There", "he", "cornered", "the", "silver", "market", "."]
  var story = ["Once upon a time Bartholomew went home.", "There he cornered the silver market."]
  res.render('index', { story: story });
});

module.exports = router;
