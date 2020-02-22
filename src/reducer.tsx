import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { LocalStorage } from './types/LocalStorage';
import { Store } from './store';

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
export const reducer = combineReducers({
  localStorage: LocalStorageReducer,
});
