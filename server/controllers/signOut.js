export const signOut = ( req, res ) => {
    console.log( req.cookies.refresh_token );
    res.clearCookie( "refresh_token" ).status( 200 ).json( { message: "user signed out successfully" } );
}