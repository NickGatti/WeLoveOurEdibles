exports.seed = function ( knex, Promise ) {
    // Deletes ALL existing entries
    return knex( 'admin' ).del()
        .then( function () {
            return knex( 'admin' ).insert( [ {
                email: 'alice@aol.com',
                first_name: 'Alice',
                last_name: 'Snow',
                password: '1234'
            } ] );
        } );
};