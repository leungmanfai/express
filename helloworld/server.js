const express = require('express');
const app = express();

// GET request
// Pathname /
app.get('/', (req,res) => {
    res.send('Hello, world!');    
})

const server = app.listen(process.env.PORT || 8099, () => {
    const port = server.address().port;
    console.log(`Server is listening at port ${port}`); 
});