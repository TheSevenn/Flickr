import jwt from "jsonwebtoken";

export const jwtSign = ( payload, jwt_key ) => {
    try {
        const signature = jwt.sign( payload, jwt_key );

        return signature;
    } catch( error ) {
        console.log( error.message );
    }
}

export const jwtVerify = ( signature, jwt_key ) => {
    try {
        const decode = jwt.verify( signature, jwt_key );
        return decode;
    } catch( error ) {
        console.log( error.message );
    }
}
