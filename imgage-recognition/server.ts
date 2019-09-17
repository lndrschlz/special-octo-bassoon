'use strict';

const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.use(express.static("./static"));

app.get('/', (req, res) => {
    res.status(200)
    res.render('index') 
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;
