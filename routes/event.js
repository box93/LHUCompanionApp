/**
 * Created by seisan on 4/13/16.
 */
var Event = require('../EventModel/Event');
var express           = require('express'),
    eventController   = express.Router();
var bookshelf = require('../bookshelf.js');

var eventCollection = bookshelf.Collection.extend({
    model:Event
});

eventController
    .route('/')

    .get(function(req, res, next){
        eventCollection.forge()
            .fetch()
            .then(function(events){
                res.send(events.toJSON());
            });

    })
    .post(function(req, res, next){
        Event.forge({
            eventName: req.body.name,
            host: req.body.host,
            location: req.body.location,
            time: req.body.time,
            when: req.body.when,
            description: req.body.description

        }).save()
            .then(function(event){
               res.send(event.toJSON());
            });


    });






module.exports = eventController;