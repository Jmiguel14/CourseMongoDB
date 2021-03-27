'use strict'

var express = require('express');
var FruitController = require('../controllers/fruit');

var api = express.Router();

api.get('/tests', FruitController.tests);
api.post('/fruit', FruitController.saveFruit);
api.get('/fruits', FruitController.getFruits);
api.get('/fruit/:id', FruitController.getFruit);
api.post('/fruit/:id', FruitController.updateFruit);
api.delete('/fruit/:id', FruitController.deleteFriut);

module.exports = api;