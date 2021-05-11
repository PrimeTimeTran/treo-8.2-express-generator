var express = require('express');
var router = express.Router();


const candidatesData = require('./db.json')

/* GET candidates listing. */
router.get('/', function(req, res, next) {
  const candidates = candidatesData.filter(c => c.company === req.query.company);
  res.json(candidates);
});




module.exports = router;
