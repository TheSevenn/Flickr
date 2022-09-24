import accountModel from "../../models/AccountSchema.js";
import userModel from "../../models/UserSchema.js";

// read watchlist of user from db
export const readWatchList = async ( userId ) => {
    try {
        if( userId ) {
            const { watchlist } = await accountModel.findOne( { userId: userId } );
            return watchlist;
        }
    } catch( error ) {
        console.log( error.message );
    }
}

// read favorites of user from db
export const readFavorite = async ( userId ) => {
    try {
        if( userId ) {
            const { favorites } = await accountModel.findOne( userId );
            return favorites;
        }
    } catch( error ) {
        console.log( error.message );
    }
}

// read user by username from db => to check if username is taken
export const readUserByUsername = async ( username ) => {
    try {
        if( username ) {
            const user = await userModel.findOne( { username: username } );
            return user;
        }
    } catch( error ) {
        console.log( "error at readuserByUsrname: ", error.message );
    }
}

// read user by email from db => to check if email alredy used
export const readUserByEmail = async ( email ) => {
    try {
        if( email ) {
            const user = await userModel.findOne( { email: email } );
            return user;
        }
    } catch( error ) {
        console.log( "error at readuserByemail: ", error.message );
    }
}