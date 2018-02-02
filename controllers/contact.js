const knex = require( "../db/knex.js" );

module.exports = {

    view: function ( req, res, next ) {
        res.render( 'contact', {
            logout: req.session.user ? true : false
        } )
    }

}