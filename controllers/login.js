const knex = require( "../db/knex.js" );

module.exports = {
    // CHANGE ME TO AN ACTUAL FUNCTION
    /*
      Users Table:
        id
        name
        email
        age
        password
    */
    index: function ( req, res ) {
        if ( !req.session.error ) {
            req.session.error = "";
        }
        res.render( "login", { error: req.session.error } )
    },
    register: function ( req, res ) {
        knex( 'user' ).insert( {
            email: req.body.email,
            password: req.body.password
        } ).then( () => {
            res.redirect( '/home' )
        } ).catch( ( err ) => {
            res.sendStatus( 500 )
            console.log( err );
        } )
    },
    login: function ( req, res ) {
        knex( 'user' )
            .where( 'email', req.body.email )
            .then( ( user ) => {
                user = user[ 0 ];
                if ( !user ) {
                    req.session.error = "Invalid email/password"
                    req.session.save( () => {
                        res.redirect( '/home' )
                        return;
                    } )
                }

                if ( user.password === req.body.password ) {
                    req.session.user = user;

                    knex( 'admin' )
                        .where( 'email', req.body.email )
                        .then( ( adminData ) => {

                            adminData = adminData[ 0 ]
                            if ( adminData ) {
                                if ( adminData.password === req.body.password ) {
                                    req.session.admin = adminData;
                                    req.session.save( () => {
                                        // redirect somewhere
                                        console.log( "We got the admin login" );
                                        res.redirect( '/admin' )
                                    } )
                                    return
                                }
                            } else {
                                req.session.save( () => {
                                    // redirect somewhere
                                    console.log( 'We got the user login' );
                                    res.redirect( '/reviews' )
                                } )
                            }
                        } ).catch( ( err ) => {
                            res.sendStatus( 500 )
                            console.log( err );
                        } )
                } else {
                    req.session.error = "Invalid email/password"
                    req.session.save( () => {
                        res.redirect( '/home' )
                    } )
                }

            } )
    },

    protectedpage: function ( req, res ) {
        res.render( 'reviews', { user: req.session.user } )
    }
}