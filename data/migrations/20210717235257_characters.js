
exports.up = function(knex) {
    return knex.schema.createTable('characters',table =>{
        table.increments("character_id")
        table.string("character_name",255).unique().notNullable()
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('characters')
};
