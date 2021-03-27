'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar rutas
var fruit_router = require('./routes/fruit');
//body-parser
//false: querystring  
//true: qs
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Configurar CORS

//rutas
app.use('/api', fruit_router);

module.exports = app