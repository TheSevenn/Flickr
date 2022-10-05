import { readUserByUsername } from "../database/actions/read.js";
import { checkHashUsingBrcypt } from "../middlewares/bcrypt.js";
import { jwtSign } from "../jsonwebtoken/jwt.js";
import { JWT_access_secret, JWT_refresh_secret, ISS, SUB } from "../utils/env_constants.js";

export const signIn = async ( req, res ) => {
    const password = req.body && req.body.password;
    const username = req.body && req.body.username;
    console.log( username, password );
    if( username && password ) {
        const user = await readUserByUsername( username );
        if( user && user.password ) {
            const verify = await checkHashUsingBrcypt( user.password, password );
            if( verify ) {
                const payload = {
                    iss: ISS,
                    sub: SUB,
                    iat: Date.now(),
                    exp: Date.now() / 1000 + 60 * 15,
                    uen: username
                }
                const refresh_payload = {
                    iss: ISS,
                    sub: SUB,
                    iat: Date.now(),
                    exp: Date.now() / 1000 + 60 * 60 * 24 * 30 * 3,
                    uen: username
                }
                const access_token = jwtSign( payload, JWT_access_secret );
                const refresh_token = jwtSign( refresh_payload, JWT_refresh_secret );

                res.cookie( 'refresh_token', refresh_token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 3, sameSite: "none" } ).json( { "user_access_token": access_token, "message": "logged in as " + username, "exp": Date.now() / 1000 + 60 * 60 * 10 } );

            } else res.json( "message:username or password was incorrect" );
        } else res.json( "message:username or password was incorrect" );
    } else res.status( 400 ).json( "message:please provide username password" )
}