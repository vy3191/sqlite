
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('boxes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('boxes').insert([
        { count: 5, brand: 'crayola', opened: 1},
        { count: 23, brand: 'crayola', opened: 0},
        { count: 41, brand: 'Ross Art', opened: 0},
      ]);
    });
};
