'use client';

import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieSlice";
import configReducer from "@/utils/configSlice"
export const appStore = configureStore(
    {
        reducer:{
            movies:moviesReducer,
            config:configReducer,
        }
    }
);

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
