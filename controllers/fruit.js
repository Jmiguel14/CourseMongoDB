'use strict'

var Fruit = require('../models/fruit');

function tests(req, res) {
    res.status(200).send({
        message: 'This route is a test'
    });
};

function saveFruit(req, res){
    var fruit = new Fruit();

    var params = req.body;

    if(params.name){
        fruit.name = params.name;
        fruit.color = params.color;
        fruit.season = params.season;

        fruit.save((err, fruitStored) =>{
            if(err){
                res.status(500).send({
                    message: 'Error in the server'
                });
            } else{
                if(fruitStored){
                    res.status(200).send({
                        fruit: fruitStored
                    });
                } else{
                    res.status(200).send({
                        message: "The fruit haven't saved"
                    });
                }
            }
        });
    } else{
        res.status(422).send({
            message: 'The fruit name is required'
        });
    }
}

function getFruits(req, res){
    Fruit.find({}).exec((err, fruits) => {
        if(err){
            res.status(500).send({
                message: 'Error in the server'
            });
        } else{
            if(fruits){
                res.status(200).send({
                    fruits
                });
            } else{
                res.status(404).send({
                    message: "There aren't fruits"
                });
            }
        }
    })
}

function getFruit(req, res){
    var fruit_id = req.params.id;
    Fruit.findById(fruit_id).exec((err, fruit) => {
        if(err){
            res.status(500).send({
                message: 'Error in the server'
            });
        } else{
            if(fruit){
                res.status(200).send({
                    fruit
                });
            } else{
                res.status(404).send({
                    message: "The fruit doesn't exist"
                });
            }
        }
        }
    )
}

function updateFruit(req, res){
    var fruitId = req.params.id;
    var update = req.body;

    Fruit.findByIdAndUpdate(fruitId, update, {new: true}, (err, fruitUpdated) => {
        if(err){
            res.status(500).send({
                message: 'Error in the server'
            });
        } else{
            if(fruitUpdated){
                res.status(200).send({
                    fruit: fruitUpdated
                });
            } else{
                res.status(404).send({
                    message: "The fruit doesn't exist"
                });
            }
        }
    });
}

function deleteFriut(req, res){
    var fruit_id = req.params.id;

    Fruit.findByIdAndRemove(fruit_id, (err, fruitRemoved) => {
        if(err){
            res.status(500).send({
                message: 'Error in the server'
            });
        } else{
            if(fruitRemoved){
                res.status(200).send({
                    fruit: fruitRemoved
                });
            } else{
                res.status(404).send({
                    message: "The fruit doesn't exist"
                });
            }
        }
    })
}

module.exports = {
    tests,
    saveFruit,
    getFruits,
    getFruit,
    updateFruit,
    deleteFriut
};