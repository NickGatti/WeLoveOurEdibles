exports.up = function ( knex, Promise ) {
    return knex.schema.createTable( 'admin', ( table ) => {
        table.increments()
        table.string( 'email' ).notNullable()
        table.string( 'first_name' ).notNullable()
        table.string( 'last_name' ).notNullable()
        table.string( 'password' ).notNullable()
        table.timestamps( true, true )
    } )
};

exports.down = function ( knex, Promise ) {
    return knex.schema.dropTable( 'admin' )
};