let express = require('express');
let app = express();

app.get('/perimeter', function (req, res) {
  res.status(200).send(`Answer is ${req.query.length * 4}`);
});

app.get('/area', function (req, res) {
  res.status(200).send(`Answer is ${req.query.length * req.query.length}`);
});

const server = app.listen(process.env.PORT || 8099, function () {
  const port = server.address().port;
  console.log(`Server listening at port ${port}`);
});
