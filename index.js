const express = require('express');
const app = express();

app.use('/', express.static('src'));

app.listen(3000, (err) => {console.log('active @ localhost:3000')});