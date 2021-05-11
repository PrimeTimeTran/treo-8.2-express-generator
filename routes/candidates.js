var express = require("express");
var router = express.Router();
var fs = require("fs");

let candidateDataRaw;

function getCandidatesData() {
  fs.readFile(`${__dirname}/db.json`, "utf8", function (err, data) {
    if (err) throw err;
    candidateDataRaw = JSON.parse(data);
  });
}

getCandidatesData();

function save(data) {
  const json = JSON.stringify(data);
  fs.writeFile("./routes/db.json", json, function (err) {
    if (err) return console.log(err);
  });
}

/* GET candidates listing. */
router.get("/", function (req, res, next) {
  let candidates = candidateDataRaw;

  const allowedFilters = ["country", "company", "ethnicity"];

  const queryStringFilters = Object.keys(req.query);
  if (queryStringFilters.length !== 0) {
    queryStringFilters.map((filter) => {
      candidates = candidates.filter((c) => c[filter] === req.query[filter]);
    });
  }
  res.json(candidates);
});

router.post("/", (req, res) => {
  const candidates = candidateDataRaw;
  const candidate = req.body;
  candidate.id = candidates.length + 1;
  candidates.push(candidate);
  save(candidates);
  res.json(candidate);
});

router.patch("/:id", (req, res) => {
  const candidates = candidateDataRaw;
  const idx = candidates.findIndex((c) => c.id === parseInt(req.params.id));
  let candidate = candidates[idx];
  candidate = { ...candidate, ...req.body };
  candidates[idx] = candidate;
  save(candidates);
  res.json(candidate);
});

module.exports = router;
