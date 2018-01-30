//Update the name of the controller below and rename the file.
const index = require( "../controllers/index.js" )
const about = require( "../controllers/about.js" )
const contact = require( "../controllers/contact.js" )
const nonmmj = require( "../controllers/nonmmj.js" )
const users = require( "../controllers/users.js" )
const admin = require( "../controllers/admin.js" )
const mmj = require( "../controllers/mmj.js" )
const login = require( "../controllers/login.js" )

module.exports = function ( app ) {

    app.get( '/', index.view );
    app.get( '/about', about.view )
    app.get( '/contact', contact.view )
    app.get( '/non-mmj', nonmmj.view )
    app.post( '/register', login.register );
    app.post( '/login', login.login );

    app.use( authMiddlewareUser );
    app.get( '/user', users.controlPanel );
    app.get( '/mmj', mmj.view );

    app.use( authMiddlewareAdmin );
    app.get( '/admin', admin.controlPanel );

}


function authMiddlewareUser( req, res, next ) {
    if ( !req.session.user ) {
        res.redirect( '/' )
    } else {
        next();
    }
}

function authMiddlewareAdmin( req, res, next ) {
    if ( !req.session.user ) {
        res.redirect( '/' )
    } else {
        next();
    }
}