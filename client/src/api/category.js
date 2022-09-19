import axios from "axios";

import { base_url, api_key, content_type, category_type } from "./config";
// category(movie,tv) - get req

/*
const topRatedMovie = axios.get( `${base_url}/${content_type.movie}/${category_type.top_rated}?api_key=${api_key}` );
const topRatedTv = axios.get( `${base_url}/${content_type.tv}/${category_type.top_rated}?api_key=${api_key}` )


export const getTopRated = axios.all(
    [
        topRatedMovie,
        topRatedTv

    ] )
    */

export function getContent( category_type ) {
    const getMovie = axios.get( `${base_url}/${content_type.movie}/${category_type}?api_key=${api_key}` );
    const getTv = axios.get( `${base_url}/${content_type.tv}/${category_type}?api_key=${api_key}` );

    return axios.all(
        [
            getMovie,
            getTv

        ] )
}

export function getUpcomingMovies() {
    const upcoming_url = `${base_url}/${content_type.movie}/${category_type.upcoming}?api_key=${api_key}`;

    return axios.get( upcoming_url );
}

export function getTrendingMoviesAndShows() {
    const trendingMovie = axios.get( `${base_url}/trending/${content_type.movie}/week?api_key=${api_key}` );

    const tredingShow = axios.get( `${base_url}/trending/${content_type.tv}/week?api_key=${api_key}` );

    return axios.all( [ trendingMovie, tredingShow ] );
}