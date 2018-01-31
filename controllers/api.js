const knex = require( "../db/knex.js" );

module.exports = {

    view: function ( req, res, next ) {
        knex( 'product' )
            .then( ( productData ) => {
                res.json( { "products": productData } )
            } )
    }

}