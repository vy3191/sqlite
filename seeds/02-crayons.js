
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('crayons').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('crayons').insert([
        {color: 'blood red', box_id: 1 },
        {color: 'red', box_id: 1 },
        {color: 'sunset', box_id: 1 },
        {color: 'icestorm', box_id: 1 },
      ]);
    });
};
