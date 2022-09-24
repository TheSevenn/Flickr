import { configureStore } from "@reduxjs/toolkit";

import contentReducer from "./features/content/contentSlice";
import overviewReducer from "./features/overview/overviewSlice";

export const store = configureStore( {
    reducer: {
        content: contentReducer,
        overview: overviewReducer
    },
    middleware: ( getDefaultMiddleware ) =>
        getDefaultMiddleware( {
            thunk: {
            },
            serializableCheck: false,
        } ),
} )