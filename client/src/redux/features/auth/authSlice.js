import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { signIn, signUp, signOut, finishUp } from "../../../api/authentication";

export const sign_in = createAsyncThunk( "/auth/sign_in", async ( document ) => {
    const response = await signIn( document );
    console.log( response );
    return response;
} );

export const sign_up = createAsyncThunk( "auth/sign_up", async ( document ) => {
    const response = await signUp( document );
    return response.data;
} );

export const finish_up = createAsyncThunk( "auth/finish_sign_up", async ( document ) => {
    const response = await finishUp( document );
    return response.data;
} );

export const sign_out = createAsyncThunk( "auth/sign_out", async () => {
    const response = await signOut();
    return response.data;
} );

export const authSlice = createSlice( {
    name: 'auth',
    initialState: {
        modalState: false,
        modal: null,
        response: null,
        user: null,
        message: ""
    }, reducers: {
        openModal( state, action ) {
            state.modal = action.payload;
            state.modalState = true;
        },
        closeModal( state ) {
            state.modal = null;
            state.modalState = false;
            state.user = null;
            state.message = "";
        },
        setUser( state, action ) {
            state.user = action.payload;
        }
    }, extraReducers: {
        [ sign_in.fulfilled ]: ( state, action ) => {
            state.response = action.payload.data;
        },
        [ sign_in.rejected ]: ( state, action ) => {
            state.response = action.payload;
        },
        [ sign_up.fulfilled ]: ( state, action ) => {
            state.message = action.payload;
        },
        [ sign_up.rejected ]: ( state ) => {
            state.response = null;
        },
        [ finishUp.fulfilled ]: ( state, action ) => {
            state.message = action.payload;
        },
        [ finishUp.rejected ]: ( state, action ) => {
            state.message = action.payload;
            state.user = null;
        },
        [ sign_out.fulfilled ]: ( state ) => {
            state.message = "";
            state.response = null;
            state.modal = null;
            state.modalState = false;
            state.user = null;
        }
    }
} );

export const { openModal, closeModal, setUser } = authSlice.actions;
export default authSlice.reducer;