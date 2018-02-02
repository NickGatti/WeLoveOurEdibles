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
              }, {
                    email: 'zzz1',
                    password: 'asdf'
              }, {
                    email: 'zzz2',
                    password: 'asdf'
              }, {
                    email: 'zzz3',
                    password: 'asdf'
              }, {
                    email: 'zzz4',
                    password: 'asdf'
              }, {
                    email: 'zzz5',
                    password: 'asdf'
              }, {
                    email: 'zzz6',
                    password: 'asdf'
              }, {
                    email: 'zzz7',
                    password: 'asdf'
              }, {
                    email: 'zzz8',
                    password: 'asdf'
              }, {
                    email: 'zzz9',
                    password: 'asdf'
              }, {
                    email: 'zza1',
                    password: 'asdf'
              }, {
                    email: 'zza2',
                    password: 'asdf'
              }, {
                    email: 'zza3',
                    password: 'asdf'
              }, {
                    email: 'zza4',
                    password: 'asdf'
              }, {
                    email: 'zza5',
                    password: 'asdf'
              }, {
                    email: 'zza6',
                    password: 'asdf'
              }, {
                    email: 'zza7',
                    password: 'asdf'
              }, {
                    email: 'zza8',
                    password: 'asdf'
              }, {
                    email: 'zza9',
                    password: 'asdf'
              }
              ] );
        } );
};