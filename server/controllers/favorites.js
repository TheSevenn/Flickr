import { readUserByUsername } from "../database/actions/read.js";
import { findByUsernameAndRemove, findByUsernameAndUpdate } from "../database/actions/update.js";

const TYPE = "favorites";

export const getFavorites = async ( req, res ) => {
    const username = req.body.username;
    try {
        if( username ) {
            const response = await readUserByUsername( username );
            if( response && response.favorites ) res.status( 200 ).json( response.favorites );
            else res.status( 404 ).json( { "message": "username " + username + " not exist" } )
        } else res.status( 400 ).json( { "message": "username required" } )
    } catch( error ) {
        console.log( error.message );
    }
}

export const addToFavorites = async ( req, res ) => {
    const username = req.body.username;
    const document = req.body.document;
    try {
        if( username && document ) {
            const user = await readUserByUsername( username );
            if( user && user.favorites ) {
                const response = await findByUsernameAndUpdate( username, document, TYPE );
                if( response ) res.status( 201 ).json( document );
                else res.status( 404 ).json( { "message": "username " + username + " not exist" } );
            } else res.status( 400 ).json( { "message": "username required" } );
        }
    } catch( error ) {
        console.log( error.message );
    }
}

export const removeFromFavorites = async ( req, res ) => {
    const username = req.body.username;
    const favoriteItem_id = req.body.favoriteItem_id;
    try {
        if( username && document_id ) {
            const response = await findByUsernameAndRemove( username, document_id, TYPE );

            if( response ) res.status( 200 ).json( { favoriteItem_id, "mesasge": "item removed from favorites" } );
            else res.status( 404 ).json( { "message": "username or id not valid" } );
        }
    } catch( error ) {
        onsole.log( error.message );
    }

}