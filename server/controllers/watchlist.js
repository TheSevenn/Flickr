import { readUserByUsername } from "../database/actions/read.js";
import { findByUsernameAndRemove, findByUsernameAndUpdate } from "../database/actions/update.js";

const TYPE = "watchlist";

export const getWatchlist = async ( req, res ) => {
    const username = req.body.username;
    try {
        if( username ) {
            const response = await readUserByUsername( username );
            if( response && response.watchlist )
                res.status( 200 ).json( response.watchlist );

            else res.status( 404 ).json( { "message": "username " + username + " not exist" } )
        } else res.status( 400 ).json( { "message": "username required" } )
    } catch( error ) {
        console.log( error.message );
    }
}

export const addToWatchlist = async ( req, res ) => {
    const document = req.body.document;
    const userId = req.body.userId;
    const username = req.body.username;
    try {
        const user = await readUserByUsername( username );
        console.log( user );
        if( user && user.watchlist ) {
            const watchlist = user.watchlist;
            watchlist.push( document );

            const response = await findByUsernameAndUpdate( username, document, TYPE )
            console.log( response );
        }
        res.status( 203 ).json( "reached" )
    } catch( error ) {
        console.log( error.message );
    }
}

export const removeFromWatchlist = async ( req, res ) => {
    const watchitem_id = req.params.item || null;
    const username = req.body.username || null;

    console.log( watchitem_id, username );
    try {
        if( username && watchitem_id ) {
            const response = await findByUsernameAndRemove( username, watchitem_id, TYPE );
            if( response ) res.status( 200 ).json( { watchitem_id, "mesasge": "item removed from watchlist" } );
        } else res.status( 403 ).json( "please authenticate" )
    } catch( error ) {
        console.log( error.message );
    }
}
