import {AnyAction, Store} from "redux";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {configureStore, ThunkDispatch} from "@reduxjs/toolkit";
import {rootReducer} from './root-reducer';

// ... your code

// 1. Get the root state's type from reducers

export type RootState = ReturnType<typeof rootReducer>;

// 2. Create a type for thunk dispatch
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

// 3. Create a type for store using RootState and Thunk enabled dispatch
export type AppStore = Omit<Store<RootState, AnyAction>, "dispatch"> & {
    dispatch: AppThunkDispatch;
};

//4. create the store with your custom AppStore
export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.REACT_APP_ENABLE_REDUX_DEV_TOOLS === 'true'
});

// you can also create some redux hooks using the above explicit types
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
