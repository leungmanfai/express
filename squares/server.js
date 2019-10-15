let express = require('express');
let app = express();

app.get('/perimeter', (req,res) => {
  res.status(200).type('text').send(`Answer is ${req.query.length * 4}`);
});

app.get('/area', (req,res) => {
  res.status(200).type('text').send(`Answer is ${req.query.length * req.query.length}`);
});

app.get('/*', (req,res) => {
  res.set('Content-Type','text/html');
  res.write('<html><body>');
  res.write('<a href=/perimeter?length=3>Calcuate perimeter of a square with length = 3</a><br>');
  res.write('<a href=/area?length=3>Calcuate area of a square with length = 3</a>');
  res.end('</body></html>')
})

const server = app.listen(process.env.PORT || 8099, function () {
  const port = server.address().port;
  console.log(`Server listening at port ${port}`);
});
