// More routing examples: https://expressjs.com/en/guide/routing.html
const express = require('express');
const app = express();

// Define virtual path '/' that links to ./public
app.use('/',express.static('public'));

// '/index.html' -> './public/welcome.html'
app.get('/index.html', (req,res) => {
  res.sendFile(__dirname + '/public/welcome.html');
});

app.get('/', (req,res) => {
  res.redirect('/index.html');
});

app.get('/index.htm?', (req,res) => {
  res.redirect('/index.html')
});

app.get(/.*fly$/, (req,res) => {
  res.status(404).send(req.url + ': Coming Soon!');
});

app.get(/.*/,  (req,res) => {
  res.status(404).send(req.url + ': Not Supported!');
});

const server = app.listen(process.env.PORT || 8099, function () {
  const port = server.address().port;
  console.log(`Server listening at ${port}`);
});
