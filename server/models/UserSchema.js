import { Schema, model } from "mongoose";

const UserSchema = new Schema( {
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    watchlist: {
        type: Array,
        required: false
    },
    favorites: {
        type: Array,
        required: false
    }
} );

const userModel = new model( "Users", UserSchema );
export default userModel;