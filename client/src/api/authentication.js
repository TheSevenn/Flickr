import axios from "axios";

import { flickr_url } from "./config";

export function signUp( document ) {
    return axios.post( `${flickr_url}/user/sign_up`, document );
}

export function finishUp( document ) {
    return axios.post( `${flickr_url}/user/finish`, document );
}

export function signIn( document ) {
    return axios.post( `${flickr_url}/user/sign_in`, document );
}

export function signOut() {
    return axios.get( `${flickr_url}/user/sign_out` );
}