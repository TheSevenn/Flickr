import mongoose, { Schema, model } from "mongoose";

const AccountSchema = new Schema( {
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userModel"
    },
    favorites: {
        type: Array,
        required: false
    },
    watchlist: {
        type: Array,
        required: false
    }
} );

const accountModel = new model( "Accounts", AccountSchema );

export default accountModel;