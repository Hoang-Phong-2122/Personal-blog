import {createSlice} from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import {AppThunk} from "../store";

interface Loading {
    show: boolean;
}

const initialState: Loading = {
    show: false
};

const slice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        showLoading(state: Loading): void {
            state.show = true;
        },
        hideLoading(state: Loading): void {
            state.show = false;
        },
    }
});

export const {reducer} = slice;

export const showLoading = (): AppThunk => async (dispatch: Dispatch<any>): Promise<void> => {
  dispatch(slice.actions.showLoading());
};

export const hideLoading = (): AppThunk => async (dispatch: Dispatch<any>): Promise<void> => {
  dispatch(slice.actions.hideLoading());
};

