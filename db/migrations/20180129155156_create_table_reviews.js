exports.up = function ( knex, Promise ) {
    return knex.schema.createTable( 'reviews', ( table ) => {
        table.increments()
        table.integer( 'appearance' ).notNullable()
        table.integer( 'taste' ).notNullable()
        table.integer( 'smell' ).notNullable()
        table.integer( 'effect' ).notNullable()
        table.integer( 'recommend' ).notNullable()
        table.string( 'from' )
        table.string( 'share' )
        table.integer( 'product_id' )
            .references( 'id' )
            .inTable( 'product' )
            .index()
        table.integer( 'user_id' )
            .references( 'id' )
            .inTable( 'user' )
            .index()
        table.timestamps( true, true )
    } )
};

exports.down = function ( knex, Promise ) {
    return knex.schema.dropTable( 'reviews' )
};