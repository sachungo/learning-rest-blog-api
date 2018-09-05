const express  = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const errorHandler = require('errorHandler');
const routes  = require('./routes');

const PORT = 3030;
const app = express();

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(errorHandler());

routes(app);

app.listen(PORT);
