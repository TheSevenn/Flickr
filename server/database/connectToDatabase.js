import mongoose from "mongoose";

export const connectToDatabase = async ( MONGO_URI ) => {

    try {
        const connected = await mongoose.connect( MONGO_URI, { useNewUrlParser: true } );
        console.log( "connected to database:" + connected.connection.name );
    } catch( error ) {
        console.log( error.message );
    }


}

