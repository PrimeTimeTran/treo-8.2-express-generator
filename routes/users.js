var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// app.get('movies')
// app.get('movies/:id')
// app.get('movies/deleted')
// app.post('movies')
// app.patch('movies/:id')
// app.get("users");
// app.get("users/:id");
// app.get("users/deleted");
// app.post("users");
// app.patch("users/:id");
// app.get("articles");
// app.get("articles/:id");
// app.get("articles/deleted");
// app.post("articles");
// app.patch("articles/:id");
// app.get("posts");
// app.get("posts/:id");
// app.get("posts/deleted");
// app.post("posts");
// app.patch("posts/:id");
// app.get("comments");
// app.get("comments/:id");
// app.get("comments/deleted");
// app.post("comments");
// app.patch("comments/:id");
// app.get("reactions");
// app.get("reactions/:id");
// app.get("reactions/deleted");
// app.post("reactions");
// app.patch("reactions/:id");

module.exports = router;
