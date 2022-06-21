import express, { json } from 'express';
import cors from 'cors';

var path = require('path');

const app = express();

//Habilito CORS
app.use(cors());

app.use( json() );

app.use(require('./routes')); 

export default app;