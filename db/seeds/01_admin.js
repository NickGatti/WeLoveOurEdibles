exports.seed = function ( knex, Promise ) {
    // Deletes ALL existing entries
    return knex( 'admin' ).del()
        .then( function () {
            return knex( 'admin' ).insert( [
                {
                    email: 'asdf@asdf.com',
                    first_name: 'admin',
                    last_name: 'admin',
                    password: 'asdf'
                }
          ] );
        } );
};