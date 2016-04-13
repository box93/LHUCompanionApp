var express = require('express');
var router = express.Router();
var Event = require('../EventModel/Event')
/* GET home page. */
router.get('/', function(req, res, next) {
  Event.query({where: {eventId: 1}})
      .fetch()
      .then(function(event){
        res.render('index', { title: event.get('eventName'),
                              time: event.get('time')});
      })


});

module.exports = router;
