exports.seed = function ( knex, Promise ) {
    // Deletes ALL existing entries
    return knex( 'user' ).del()
        .then( function () {
            // Inserts seed entries
            return knex( 'user' ).insert( [
                {
                    email: 'a@a.com',
                    password: 'asdf'
              }, {
                    email: 'asdf@asdf.com',
                    password: 'asdf'
              }
              ] );
        } );
};