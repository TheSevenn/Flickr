import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getContent, getUpcomingMovies, getTrendingMoviesAndShows } from "../../../api/category";

export const getContentByCategoryType = createAsyncThunk( "content/getContentByType", async ( category_type ) => {
    const [ movie, tv ] = await getContent( category_type );
    return [ movie.data.results, tv.data.results ];
} );

export const getUpcoming = createAsyncThunk( "content/getUpcoming", async () => {
    const response = await getUpcomingMovies();

    return response.data.results;
} );

export const getTrending = createAsyncThunk( "content/getTrendig", async () => {
    const [ movie, tv ] = await getTrendingMoviesAndShows();
    return [ movie.data.results, tv.data.results ];
} )


export const contentSlice = createSlice( {
    name: 'content',
    initialState: {
        movies: [],
        tvshows: [],
        category: "",
        isLoading: false,
        error: ""
    },

    reducers: {
    },

    extraReducers: {

        // for popular and top rated
        [ getContentByCategoryType.pending ]: ( state, action ) => {
            state.isLoading = true;
        },
        [ getContentByCategoryType.fulfilled ]: ( state, action ) => {
            state.isLoading = false;
            state.movies = action.payload[ 0 ];
            state.tvshows = action.payload[ 1 ];
            state.category = "default";
        },
        [ getContentByCategoryType.rejected ]: ( state, action ) => {
            state.isLoading = false;
        },

        // for upcoming movies 
        [ getUpcoming.pending ]: ( state ) => {
            state.isLoading = true;
        },
        [ getUpcoming.fulfilled ]: ( state, action ) => {
            state.isLoading = false;
            state.movies = action.payload;
            state.tvshows = [];
            state.category = "upcoming";
        },
        [ getUpcoming.rejected ]: ( state ) => {
            state.isLoading = false;
        },

        //  for trending movies and shows
        [ getTrending.pending ]: ( state ) => {
            state.isLoading = true;
        },
        [ getTrending.fulfilled ]: ( state, action ) => {
            state.isLoading = false;
            state.movies = action.payload[ 0 ];
            state.tvshows = action.payload[ 1 ];
            state.category = "trending";
        },
        [ getTrending.rejected ]: ( state ) => {
            state.isLoading = false;
        }
    }
} );

// export const { getMovies, getTvShows } = contentSlice.actions;

export default contentSlice.reducer;