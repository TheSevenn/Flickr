import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getOverview } from "../../../api/overview";

export const getOverviewById = createAsyncThunk( "overview/getOverview", async ( meta ) => {
    const response = await getOverview( meta.id, meta.type );

    const { backdrop_path, genres, id, overview, poster_path, status, tagline, videos, credits, images } = response.data;
    const title = response.data.title || response.data.name;
    const release_date = response.data.release_date || response.data.first_air_date;
    const runtime = response.data.runtime || response.data.episode_run_time[ 0 ] || null;
    const seasons = response.data.seasons || null;
    const number_of_seasons = response.data.number_of_seasons || null;
    const number_of_episodes = response.data.number_of_episodes || null;

    return { backdrop_path, genres, id, overview, poster_path, status, tagline, videos, credits, images, title, release_date, runtime, seasons, number_of_episodes, number_of_seasons };
} );

// export const getCastsById = createAsyncThunk( "overview/getCasts", async ( meta ) => {
//     const response = await getCasts( meta.id, meta.type );
//     return response.data;
// } );

export const overviewSlice = createSlice( {
    name: 'overview',
    initialState: {
        overviewResponse: {},
        // casts: {},
        is_Loading: false,
        error: ""
    },
    reducer: {
    },

    extraReducers: {
        [ getOverviewById.pending ]: ( state ) => {
            state.is_Loading = true;
        },
        [ getOverviewById.fulfilled ]: ( state, action ) => {
            state.is_Loading = false;
            state.overviewResponse = action.payload;
        },
        [ getOverviewById.rejected ]: ( state ) => {
            state.is_Loading = false;
        },
        // [ getCastsById.pending ]: ( state ) => {
        //     state.is_Loading = true;
        // },
        // [ getCastsById.fulfilled ]: ( state, action ) => {
        //     state.is_Loading = false;
        //     state.casts = action.payload;
        // },
        // [ getCastsById.rejected ]: ( state ) => {
        //     state.is_Loading = false;
        // }
    }
} );

export default overviewSlice.reducer;