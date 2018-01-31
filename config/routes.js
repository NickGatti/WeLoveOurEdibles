//Update the name of the controller below and rename the file.
const index = require( "../controllers/index.js" )
const login = require( "../controllers/login.js" )
const about = require( "../controllers/about.js" )
const contact = require( "../controllers/contact.js" )
const home = require( "../controllers/home.js" )
const nonmmj = require( "../controllers/nonmmj.js" )
const user = require( "../controllers/user.js" )
const admin = require( "../controllers/admin.js" )
const mmj = require( "../controllers/mmj.js" )

module.exports = function ( app ) {

    app.get( '/', index.view );
    app.get( '/home', home.view )
    app.get( '/about', about.view )
    app.get( '/contact', contact.view )
    app.get( '/non-mmj', nonmmj.view )
    app.get( '/login', login.index )
    app.get( '/nonmmj', nonmmj.view )
    app.post( '/user/register', login.register );
    app.post( '/user/login', login.login );

    app.use( authMiddlewareUser );
    app.get( '/user', user.controlPanel );
    app.get( '/mmj', mmj.view );

    app.use( authMiddlewareAdmin );
    app.get( '/admin', admin.controlPanel );

}


function authMiddlewareUser( req, res, next ) {
    if ( !req.session.user ) {
        res.redirect( '/home' )
    } else {
        next();
    }
}

function authMiddlewareAdmin( req, res, next ) {
    if ( !req.session.admin ) {
        res.redirect( '/home' )
    } else {
        next();
    }
}