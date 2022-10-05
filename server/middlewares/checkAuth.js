import { jwtVerify } from "../jsonwebtoken/jwt.js";
import { JWT_access_secret } from "../utils/env_constants.js";

export const checkAuth = async ( req, res, next ) => {
    console.log( "in use" );
    //  optional chaining with ?.
    const access_token = req.headers.authorization?.split( " " )[ 1 ];
    try {
        if( access_token ) {
            const decode = jwtVerify( access_token, JWT_access_secret );
            if( decode && decode.exp > Date.now() ) {
                req.username = decode.uen;
                next();
            } else res.status( 401 ).json( { "message": "token invalid or expired", "status": "authorization failed" } )
        } else res.status( 403 ).json( { "message": "token not found" } )
    } catch( error ) {
        console.log( error.message );
    }
}