import type {TypedUseSelectorHook} from 'react-redux';
import {useDispatch as useReduxDispatch, useSelector as useReduxSelector} from 'react-redux';
import type {ThunkAction} from 'redux-thunk';
import type {Action} from '@reduxjs/toolkit';
import {configureStore, ThunkDispatch} from '@reduxjs/toolkit';
import {rootReducer} from './root-reducer';
import {AnyAction} from "redux";

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.REACT_APP_ENABLE_REDUX_DEV_TOOLS === 'true'
});

// export type RootState = ReturnType<typeof store.getState>;

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

export const useAppDispatch = () => useReduxDispatch<AppThunkDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

// export const useDispatch = () => useReduxDispatch<AppDispatch>();

