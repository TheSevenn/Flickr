import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getOverview } from "../../../api/overview";

export const getOverviewById = createAsyncThunk( "overview/getOverview", async ( meta ) => {
    console.log( meta.type );
    const response = await getOverview( meta.id, meta.type );

    return response.data;
} )

export const overviewSlice = createSlice( {
    name: 'overview',
    initialState: {
        overviewResponse: {},
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
        }
    }
} );

export default overviewSlice.reducer;