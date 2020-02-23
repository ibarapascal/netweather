import { LocalStorage } from './types/LocalStorage';
import { ForecastRes } from './types/interface/GetForecast';

export interface Store {
  localStorage: LocalStorage;
  forecast: ForecastRes;
}