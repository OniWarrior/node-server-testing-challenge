exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries and resets ids
    return knex('characters')
      .truncate()
      .then(function() {
        return knex('characters').insert([
          { character_name: 'peter parker' },
          { character_name: 'mary jane watson' },
          { character_name: 'eddie brock' },
          { character_name: 'harry osborn' }
        ]);
      });
  };