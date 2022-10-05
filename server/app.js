import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

import { MONGO_URI, PORT } from "./utils/env_constants.js";
import { connectToDatabase } from "./database/connectToDatabase.js";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";
import { logger } from "./middlewares/logger.js";

const app = express();

// middlewares
app.use( cors( { origin: "http://localhost:3000", credentials: true } ) );
app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );
app.use( cookieParser() );
app.use( "/", logger );

//  connect to database 
connectToDatabase( MONGO_URI );

// routes
app.use( "/user", authRouter, userRouter );

// listen to port
app.listen( PORT || 5000, () => {
    console.log( "server running on port:", PORT || 5000 );
} );


