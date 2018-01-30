exports.up = function ( knex, Promise ) {
    return knex.schema.createTable( 'product', ( table ) => {
        table.increments()
        table.string( 'name' ).notNullable()
        table.string( 'brand' ).notNullable()
        table.boolean( 'MMJ' ).notNullable()
        table.string( 'category' ).notNullable()
        table.text( 'description' ).notNullable()
        table.string( 'img_url' ).notNullable()
        table.timestamps( true, true )
    } )
};

exports.down = function ( knex, Promise ) {
    return knex.schema.dropTable( 'product' )
};