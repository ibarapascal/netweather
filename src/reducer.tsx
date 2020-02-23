import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { LocalStorage } from './types/LocalStorage';
import { Store } from './store';
import { ForecastRes } from './types/interface/GetForecast';

const LocalStorageReducer = createReducer<Store['localStorage']>(
  new LocalStorage(),
  {
    saveLocalStorageItem(state: LocalStorage, action: any) {
      return state = {...state, [action.payload.item]: action.payload.value};
    },
    clearLocalStorage(state: LocalStorage) {
      return state = new LocalStorage();
    },
  }
);

const ForecastReducer = createReducer<Store['forecast']>(
  new ForecastRes(),
  {
    saveForecastData(state: ForecastRes, action: any) {
      return state = action.payload;
    },
  }
);

export const reducer = combineReducers({
  localStorage: LocalStorageReducer,
  forecast: ForecastReducer,
});
