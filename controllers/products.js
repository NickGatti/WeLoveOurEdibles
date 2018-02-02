const knex = require( "../db/knex.js" );

module.exports = {

    viewProduct: function ( req, res, next ) {
        knex( 'product' )
            .where( 'id', req.params.id )
            .then( ( productData ) => {
                knex( 'reviews' )
                    .where( 'product_id', req.params.id )
                    .then( ( reviewData ) => {
                        let averages = avg( reviewData, [ 'appearance', 'taste', 'smell', 'effect', 'recommend' ] )
                        res.render( 'product', {
                            product: productData[ 0 ],
                            reviews: reviewData,
                            average: averages
                        } )
                    } )
            } )
    }

}

function avg( data, proto ) {
    let res
    let output = []
    for ( let z = 0; z < proto.length; z++ ) {
        res = 0
        for ( let i = 0; i < data.length; i++ ) {
            res += data[ i ][ proto[ z ] ]
        }
        output.push( res / data.length )
    }
    return output
}