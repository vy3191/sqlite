
exports.up = function(knex, Promise) {
  //The change we want to make to the schema
   return knex.schema.createTable('crayons', 
     table => {
         table.increments();
         table.string('color').notNullable();
         table.integer('box_id').unsigned()
              .references('id').inTable('boxes');
   });

};

exports.down = function(knex, Promise) {
// Undo the schema changes
  return knex.schema.dropTableIfExists('crayons');
};
