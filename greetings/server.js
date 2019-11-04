const express = require('express');
const app = express();

const greetingMsg = (name,showtime = false) => {
	let today = new Date();
	let msg = (name != null) ? 'Hello ' + name + '! ' : 'Hello';
	if (showtime) {
    msg += `  It is now ${today.toTimeString()}`;
	}
	return(msg);
}

app.get('/', (req,res) => {
  res.redirect('/greetings');
});

app.get('/greetings', (req,res) => {
  res.send(greetingMsg(req.query.name));
});

app.get('/greetings/sayHelloWithTime', (req,res) => {
  res.send(greetingMsg(req.query.name,true));
});

app.get('/*', (req,res) => {  // default route for anything else
  res.redirect('/greetings');
})

const server = app.listen(process.env.PORT || 8099, () => {
  const port = server.address().port;
  console.log(`Server listening at port ${port}`);
});
