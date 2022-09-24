import { readUserByUsername, readUserByEmail } from "../database/actions/read.js";
import { createUser } from "../database/actions/create.js";
import { hashUsingBcrypt } from "../middlewares/bcrypt.js";

export const startSignUp = async ( req, res ) => {
    const { username } = req.body;
    if( username ) {
        const response = await readUserByUsername( username );
        console.log( response );
        if( response ) res.status( 400 ).json( { "message": "username not available" } );
        else res.status( 200 ).json( { "message": "continue" } );
    } else res.status( 400 ).json( { "message": "please choose username" } );
}

export const finishSignUp = async ( req, res ) => {
    const { password, email } = req.body;
    console.log( password, email );
    if( email ) {
        try {
            const response = await readUserByemail( email );
            console.log( response );
            if( response ) res.status( 400 ).json( { "message": "this number is already in use" } );
            else if( password && email ) {
                const newUser = {
                    name: req.body.name,
                    username: req.body.username,
                    password: hashUsingBcrypt( req.body.password ),
                    email: req.body.email,
                    watchlist: [],
                    favorites: []
                }
                const result = await createUser( newUser );
                console.log( result );
                if( result ) res.status( 201 ).json( { "message": "user signed up succesfully" } );
            }
        } catch( error ) {
            console.log( error.message );
        }
    }
}