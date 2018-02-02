//Update the name of the controller below and rename the file.
const index = require( "../controllers/index.js" )
const login = require( "../controllers/login.js" )
const about = require( "../controllers/about.js" )
const contact = require( "../controllers/contact.js" )
const home = require( "../controllers/home.js" )
const share = require( "../controllers/share.js" )
const user = require( "../controllers/user.js" )
const admin = require( "../controllers/admin.js" )
const reviews = require( "../controllers/reviews.js" )
const api = require( "../controllers/api.js" )
const products = require( "../controllers/products.js" )

module.exports = function ( app ) {

    //MMJ-FALSE
    app.get( '/', index.view );
    app.get( '/home', home.view )
    app.get( '/about', about.view )
    app.get( '/contact', contact.view )
    app.get( '/login', login.index )
    app.get( '/share', share.view )
    app.get( '/products/:id', products.viewProduct )
    app.get( '/logout', index.logout )
    app.post( '/share/search', share.search )
    app.post( '/reviews/search', reviews.search )
    app.post( '/user/register', login.register );
    app.post( '/user/login', login.login );

    //API
    app.get( '/api', api.view )

    //MMJ-TRUE
    app.use( authMiddlewareUser );
    app.get( '/user', user.controlPanel );
    app.get( '/reviews', reviews.view );

    //ADMIN
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