
'use strict';

var bookshelf = require('../bookshelf.js');

var Event  = bookshelf.Model.extend({
    tableName:'event',
    idAttribute:'eventId',
    hasTimestamps: false,







});


module.exports = bookshelf.model('Event', Event);