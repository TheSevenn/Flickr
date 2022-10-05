import jwt from "jsonwebtoken";

import { JWT_access_secret, JWT_refresh_secret, ISS, SUB } from "../utils/env_constants.js";

export const renewAccess = ( req, res ) => {
    const refresh_token = req.cookies.refresh_token;
    try {
        if( refresh_token ) {
            const decode = jwt.verify( refresh_token, JWT_refresh_secret );
            if( decode && decode.exp > Date.now() / 1000 ) {
                const access_token = jwt.sign( {
                    iss: ISS,
                    sub: SUB,
                    iat: Date.now(),
                    exp: Date.now() / 1000 + 60 * 10,
                    uen: decode.uen
                }, JWT_access_secret );

                res.status( 200 ).json( { "access_token": access_token, "exp": Date.now() / 1000 + 60 * 10 } )
            } else res.status( 403 ).json( { "message": "token is expired", "status": "failed access" } )
        } else res.status( 400 ).json( { "message": "no token found" } )
    } catch( error ) {
        console.log( error.message );
    }

}