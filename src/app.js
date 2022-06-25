const express = require('express');
const json = require("express").json;
const cors = require('cors');

var path = require('path');

const app = express();

//Habilito CORS
app.use(cors());

app.use( json() );

app.use(require('./routes')); 

module.exports = { app } ;