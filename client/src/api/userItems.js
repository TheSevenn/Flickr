import axios from "axios";

import { flickr_url } from "./config";


// favorites
export function getFavorites( document ) {
    return axios.get( `${flickr_url}/user/favorites`, document, { Headers: { withCredentials: true } } );
}

export function addFavorite( document ) {
    return axios.patch( `${flickr_url}/favorites`, document, { Headers: { withCredentials: true } } );
}

export function removeFavorite( document, doc_id ) {
    return axios.patch( `${flickr_url}/user/favorites/${doc_id}/remove`, document, { Headers: { withCredentials: true } } );
}


// watchlist
export function getWatchlist( document ) {
    return axios.get( `${flickr_url}/user/watchlist`, document, { Headers: { withCredentials: true } } );
}

export function addWatchItem( document ) {
    return axios.patch( `${flickr_url}/watchlist`, document, { Headers: { withCredentials: true } } );
}

export function removeWatchItem( document, doc_id ) {
    return axios.patch( `${flickr_url}/user/watchlist/${doc_id}/remove`, document, { Headers: { withCredentials: true } } );
}

