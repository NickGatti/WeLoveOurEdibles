const knex = require( "../db/knex.js" );

module.exports = {

    view: function ( req, res, next ) {
        if ( !req.session.products ) {
            res.render( 'share', {
                products: false,
                logout: req.session.user ? true : false
            } )
            return
        }
        res.render( 'share', {
            products: req.session.products,
            logout: req.session.user ? true : false
        } )
    },

    search: function ( req, res, next ) {
        knex( 'product' )

            .where('MMJ', false)
            .andWhere(function() {
                this.whereRaw(`LOWER(name) LIKE ?`, `%${req.body.search.toLowerCase()}%`)
                this.orWhereRaw(`LOWER(brand) LIKE ?`, `%${req.body.search.toLowerCase()}%`)
                this.orWhereRaw(`LOWER(category) LIKE ?`, `%${req.body.search.toLowerCase()}%`)
                this.orWhereRaw(`LOWER(description) LIKE ?`, `%${req.body.search.toLowerCase()}%`)
            })
            .then( ( productData ) => { 
                req.session.products = productData
                req.session.save( () => {
                    res.redirect( '/share' )
                } )
            } )
    }

}