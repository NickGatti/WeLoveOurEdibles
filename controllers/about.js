const knex = require( "../db/knex.js" );

module.exports = {

    view: function ( req, res, next ) {
        res.render( 'about', {
            logout: req.session.user ? true : false
        } )
    }

}