
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table){
      table.increments();
      table.string('title').notNullable();
      table.string('description').notNullable();
      table.decimal('value').notNullable();
      table.integer('ong_id').unsigned().references('id').inTable('ongs');
    
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('incidents');
  };
  