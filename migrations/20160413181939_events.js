
exports.up = function(knex, Promise) {
  return knex.schema.createTable('event', function(table){
      table.increments('eventId').primary();
      table.string('eventName');
      table.string('host');
      table.string('location');
      table.string('time');
      table.date('when');
      table.string('description');
      
      
    });
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTable('event');
};
