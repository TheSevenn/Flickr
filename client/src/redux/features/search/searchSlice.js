import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { searchQuery } from "../../../api/search";

export const getSearchResults = createAsyncThunk( "search/searchquery", async ( query ) => {
    const response = await searchQuery( query );
    console.log( response.data );
    return response.data;
} )

export const searchSlice = createSlice( {
    name: 'search',
    initialState: {
        search_result: [],
        isLoading: false
    },
    reducers: {
        resetSearch( state ) {
            state.search_result = [];
        }
    },
    extraReducers: {
        [ getSearchResults.pending ]: ( state ) => {
            state.isLoading = true;
            state.search_result = "searching...";
        },
        [ getSearchResults.fulfilled ]: ( state, action ) => {
            state.isLoading = false;
            state.search_result = action.payload;
        },
        [ getSearchResults.rejected ]: ( state ) => {
            state.isLoading = false;
            state.search_result = "no results found";
        }
    }
} );

export const { resetSearch } = searchSlice.actions;
export default searchSlice.reducer;

