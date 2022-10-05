import dotenv from "dotenv";

dotenv.config();

// env variables to constants
export const PORT = process.env.PORT;
export const MONGO_URI = process.env.MONGO_URI;
export const ISS = process.env.iss;
export const SUB = process.env.sub;
export const JWT_access_secret = process.env.JWT_ACCESS_SECRET;
export const JWT_refresh_secret = process.env.JWT_REFRESH_SECRET;