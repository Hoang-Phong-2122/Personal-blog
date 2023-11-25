import {combineReducers} from '@reduxjs/toolkit';
import {reducer as loadingReducer} from '../slices/loading';

export const rootReducer = combineReducers({
  loading: loadingReducer
});
