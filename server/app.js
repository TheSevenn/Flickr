import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectToDatabase } from "./database/connectToDatabase.js";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";
import { logger } from "./middlewares/logger.js";

const app = express();
dotenv.config( { path: "./config.env" } );

// middlewares
app.use( cors( { origin: "http://localhost:3000" } ) );
app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );
app.use( "/", logger );

const MONGO_URI = process.env.MONGO_URI;
//  connect to database 
connectToDatabase( MONGO_URI );

// routes
app.use( "/user", authRouter, userRouter );

// listen to port
app.listen( 5000, () => {
    console.log( "server running" );
} );