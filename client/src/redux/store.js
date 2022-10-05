import { configureStore } from "@reduxjs/toolkit";

import contentReducer from "./features/content/contentSlice";
import overviewReducer from "./features/overview/overviewSlice";
import searchReducer from "./features/search/searchSlice";
import authReducer from "./features/auth/authSlice";

export const store = configureStore( {
    reducer: {
        content: contentReducer,
        overview: overviewReducer,
        search: searchReducer,
        auth: authReducer
    },
    middleware: ( getDefaultMiddleware ) =>
        getDefaultMiddleware( {
            thunk: {
            },
            serializableCheck: false,
        } )
} )