import { createSlice } from "@reduxjs/toolkit";

import * as user from "../../../api/userItems";


const userSlice = createSlice( {
    name: 'user',
    initialState: {
        watchlist: [],
        favorites: [],
    }, reducers: {

    }, extraReducers: {

    }
} );

export default userSlice.reducer;