const knex = require( "../db/knex.js" );

module.exports = {

    view: function ( req, res, next ) {
        knex( 'product' )
            .then( ( productData ) => {
                res.render( 'home', {
                    products: productData
                } )
            } ).catch( ( err ) => {
                res.sendStatus( 500 )
                console.log( err );
            } )
    }

}