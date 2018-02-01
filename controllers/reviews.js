const knex = require( "../db/knex.js" );

module.exports = {

    view: function ( req, res, next ) {
        if ( !req.session.products ) {
            res.render( 'reviews', {
                products: false
            } )
            return
        }
        res.render( 'reviews', {
            products: req.session.products
        } )
    },

    search: function ( req, res, next ) {
        knex( 'product' )
            .where( { 'name': req.body.search } )
            .orWhere( { 'brand': req.body.search } )
            .orWhere( { 'category': req.body.search } )
            .orWhere( { 'description': req.body.search } )
            .then( ( productData ) => {
                req.session.products = productData
                req.session.save( () => {
                    res.redirect( '/reviews' )
                } )
            } )
    }

}