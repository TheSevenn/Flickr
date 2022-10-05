import { readUserByUsername, readUserByEmail } from "../database/actions/read.js";
import { createUser } from "../database/actions/create.js";
import { hashUsingBcrypt } from "../middlewares/bcrypt.js";

export const startSignUp = async ( req, res ) => {
    const { username, name } = req.body;
    if( username ) {
        const response = await readUserByUsername( username );
        console.log( response );
        if( response && response.username ) res.status( 400 ).json( { "message": "username not available" } );
        else if( username && name ) res.status( 200 ).json( { "message": "continue" } );
        else res.status( 400 ).json( { "message": "please provide your name" } )
    } else res.status( 400 ).json( { "message": "please choose username" } );
}

export const finishSignUp = async ( req, res ) => {
    const { email, password, name, username } = req.body;
    console.log( password, email, username, name );
    if( email ) {
        try {
            const response = await readUserByEmail( email );
            console.log( response );
            if( response ) res.status( 400 ).json( { "message": "this email is already in use" } );
            else if( password && email ) {
                const newUser = {
                    name: name,
                    username: username,
                    password: hashUsingBcrypt( password ),
                    email: email,
                    watchlist: [],
                    favorites: []
                }
                const result = await createUser( newUser );
                console.log( result );
                if( result ) res.status( 201 ).json( { "message": "user signed up succesfully" } );
            } else res.status( 400 ).json( { "message": "provide a valid email" } );
        } catch( error ) {
            console.log( error.message );
        }
    }
}