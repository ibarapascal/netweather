import { Map } from 'immutable';
import * as service from '../../api';
import { ForecastReq, ForecastRes } from '../../types/interface/GetForecast';
import { InputAction } from '../../types/BaseTypes';

export const actions = {
  saveLocalStorageItem: (payload: InputAction) => ({type: 'saveLocalStorageItem', payload}),
  saveForecastData: (payload: ForecastRes) => ({type: 'saveForecastData', payload}),
};

export const actionsWithService = {
  getForecast: (params: ForecastReq) => {
    return async (dispatch: any) => {
      const result = await service.getForecast(Map(Object.entries(params)));
      dispatch(actions.saveForecastData(result));
    };
  }
};