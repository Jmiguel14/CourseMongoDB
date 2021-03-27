'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TutorialMongo', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Succesful conexion to MongoDB!!');
            
            app.listen(port, () => {
                console.log('The server is running on localhost:3800')
            })
        })
        .catch(err => console.log(err));