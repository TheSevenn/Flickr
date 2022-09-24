import userModel from "../../models/UserSchema.js";

export const createUser = async ( document ) => {
    if( document ) {
        try {
            const newUser = new userModel( document );
            const response = await newUser.save();
            console.log( response, " is registered" );
            return response;
        } catch( error ) {
            console.log( error );
        }
    }
}