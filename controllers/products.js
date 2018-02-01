const knex = require( "../db/knex.js" );

module.exports = {

    viewProduct: function ( req, res, next ) {
        knex( 'product' )
            .where( 'id', req.params.id )
            .then( ( productData ) => {
                knex( 'reviews' )
                    .where( 'product_id', req.params.id )
                    .then( ( reviewData ) => {
                        res.render( 'product', {
                            product: productData[ 0 ],
                            reviews: reviewData
                        } )
                    } )
            } )
    }

}