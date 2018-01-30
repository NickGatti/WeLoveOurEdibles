const knex = require( "../db/knex.js" );

module.exports = {

    controlPanel: function ( req, res, next ) {
        res.render( 'admin' )
    }

}