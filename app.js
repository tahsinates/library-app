const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './views/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    // express.open('http://localhost:' + port);
    debug(`listening on port ${chalk.green(port)}`);
  }
});
