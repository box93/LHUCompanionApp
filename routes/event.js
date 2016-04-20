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
    .route('/:id')
    .get( function(req, res, next){
        Event.query({where: {eventId: req.params.id}})
            .fetch()
            .then(function(event){
                res.send(event.toJSON());
            });

    })
    .put(function( req, res, next){
        Event.forge({eventId: req.params.id})
            .fetch({require: true})
            .then(function(event){
                event.save({
                     eventName: req.body.name           || event.get('eventName'),
                     host: req.body.host                || event.get('host'),
                     location: req.body.location        || event.get('location'),
                     time: req.body.time                || event.get('time'),
                     when: req.body.when                || event.get('when'),
                     description: req.body.description  || event.get('description'),
                                
                }).then(function(event){
                    res.send(event.toJSON());
                })
            });
    })
    .delete( function(req, res, next){
        new Event({eventId: req.params.id})
            .destroy()
            .then(function(event){
                res.status(200).json({message: 'success'});

            }).catch(function (err){
            res.status(500).json({message: err.message});
        });

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