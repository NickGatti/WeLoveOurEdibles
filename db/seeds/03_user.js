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
                    from: 'Level Up dispensary',
                    share: 'facebook'
                } ] );
        } );
};