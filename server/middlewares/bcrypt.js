import bcrypt from "bcryptjs";

const SALT = 11;

export const hashUsingBcrypt = ( document ) => {
    const hash = bcrypt.hashSync( document, SALT );
    return hash;
}

export const checkHashUsingBrcypt = async ( hash, document ) => {
    const result = await bcrypt.compare( document, hash );
    return result;
}