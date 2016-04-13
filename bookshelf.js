/**
 * Created by seisan on 4/13/16.
 */
var knex      = require('knex')(require('./knexFile')[process.env.NODE_ENV]), // Selects the correct DB config object for the current environment
    bookshelf = require('bookshelf')(knex);

bookshelf.plugin('registry');

module.exports = bookshelf