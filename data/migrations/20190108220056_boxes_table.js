
exports.up = function(knex, Promise) {
     //The change we want to make to the schema
      return knex.schema.createTable('boxes', 
        table => {
            table.increments();
            table.integer('count').notNullable()
      });

};

exports.down = function(knex, Promise) {
   // Undo the schema changes
     return knex.schema.dropTableIfExists('boxes');
};
