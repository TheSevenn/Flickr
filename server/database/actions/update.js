import userModel from "../../models/UserSchema.js";

export const findByUsernameAndUpdate = async ( username, document, type ) => {
    try {
        if( type === "watchlist" ) {
            const response = await userModel.findOneAndUpdate( { username: username }, { $push: { watchlist: document } } );
            return response;
        } else if( type === "favorites" ) {
            const response = await userModel.findOneAndUpdate( { username: username }, { $push: { favorites: document } } );
            return response;
        } else return;
    } catch( error ) {
        console.log( error.message );
    }
}

export const findByUsernameAndRemove = async ( username, document_id, type ) => {
    try {
        if( type === "watchlist" ) {
            const response = await userModel.findOneAndUpdate( { username: username }, { $pull: { watchlist: { id: document_id } } } );
            return response;
        } else if( type === "favorites" ) {
            const response = await userModel.findOneAndUpdate( { username: username }, { $pull: { watchlist: { id: document_id } } } );
            return response;
        } else return;
    } catch( error ) {
        console.log( error.message );
    }
}