const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const config = require('./config');
const router = require('./routes');

// add white-listed domains
app.use(cors(config.cors));

app.use(bodyParser.json({ limit: config.bodyLimit }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

module.exports = app;
