exports.seed = function ( knex, Promise ) {
    // Deletes ALL existing entries
    return knex( 'reviews' ).del()
        .then( function () {
            // Inserts seed entries
            return knex( 'reviews' ).insert( [
                {
                    appearance: 7,
                    taste: 7,
                    smell: 7,
                    effect: 7,
                    recommend: 7,
                    from: '',
                    share: false,
                    product_id: 3,
                    user_id: 1
              }, {
                    appearance: 5,
                    taste: 9,
                    smell: 3,
                    effect: 9,
                    recommend: 5,
                    from: '',
                    share: false,
                    product_id: 3,
                    user_id: 2
                            },
              ] );
        } );
};