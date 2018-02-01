const knex = require( "../db/knex.js" );

module.exports = {

    view: function ( req, res, next ) {
        if ( !req.session.reviews ) {
            res.render( 'share', {
                reviews: false
            } )
            return
        }
        res.render( 'share', {
            reviews: req.session.reviews
        } )
    },

    search: function ( req, res, next ) {
        knex( 'reviews' )
            .where( { 'name': req.body.search } )
            .orWhere( { 'brand': req.body.search } )
            .orWhere( { 'category': req.body.search } )
            .orWhere( { 'description': req.body.search } )
            .then( ( reviewData ) => {
                req.session.reviews = reviewData
                req.session.save( () => {
                    res.redirect( '/share' )
                } )
            } )
    }

}