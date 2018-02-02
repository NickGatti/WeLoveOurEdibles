const knex = require( "../db/knex.js" );

module.exports = {

    view: function ( req, res, next ) {
        res.redirect( '/home ' )
    },

    logout: function ( req, res, next ) {
        delete req.session.user
        delete req.session.admin
        res.redirect( '/home ' )
    }

}