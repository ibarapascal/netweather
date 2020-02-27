import { combineReducers } from 'redux';

import { createReducer } from '@reduxjs/toolkit';

import { Store } from './store';
import { ForecastRes } from './types/interface/GetForecast';
import { LocalStorage } from './types/LocalStorage';

const LocalStorageReducer = createReducer<Store['localStorage']>(
  new LocalStorage(),
  {
    saveLocalStorageItem(state: LocalStorage, action: any) {
      return {...state, [action.payload.item]: action.payload.value};
    },
    clearLocalStorage(state: LocalStorage) {
      return new LocalStorage();
    },
  }
);

const ForecastReducer = createReducer<Store['forecast']>(
  new ForecastRes(),
  {
    saveForecastData(state: ForecastRes, action: any) {
      return action.payload;
    },
  }
);

export const reducer = combineReducers({
  localStorage: LocalStorageReducer,
  forecast: ForecastReducer,
});
