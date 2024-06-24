import { configureStore } from '@reduxjs/toolkit';
import { enableMapSet } from 'immer';
import logger from 'redux-logger'
import appSlice from './appSlice';

enableMapSet();

export const store = configureStore({
    reducer: appSlice,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;