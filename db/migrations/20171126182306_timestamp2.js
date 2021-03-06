
exports.up = function(knex, Promise) {
  return knex.schema.table('items', function(table){
    table.timestamp('date_added');
    table.timestamp('date_completed');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('items', function(table){
    table.dropColumn('date_added');
    table.dropColumn('date_completed');
  });
};
