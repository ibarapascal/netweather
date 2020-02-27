import { TimeService } from '../../../services/TimeService';
import {
  ForecastRes,
  ForecastUnit
} from '../../../types/interface/GetForecast';
import {
  TableAttr,
  WTConstant
} from './WTConstant';

export type TableUnit = {
  [K in TableAttr]: string | number;
}

export class WTService {

  static generateTableData(forecast: ForecastRes): Array<TableUnit> {
    const timezoneDiff = forecast.city.timezone;
    return forecast.list.map(item => ({
      dt: TimeService.ts2mmddhhmm(Number(item.dt), timezoneDiff),
      weather: item.weather[0].main,
      temp: item.main.temp,
      speed: item.wind.speed,
      deg: item.wind.deg,
      pressure: item.main.pressure,
      cloud: item.clouds.all,
      feels_like: item.main.feels_like
    })).map(item => {
      Object.keys(item).forEach(attr => {
        const unit = WTConstant.TABLE_SUBMAP.find(x => x.attr === attr);
        const suffix = unit?.suffix ?? '';
        (item as any)[attr] += ` ${suffix}`;
      })
      return item;
    });
  }

  static umbrellaDay(list: Array<ForecastUnit>): number {
    const value = Math.max(...list.map(x => x.clouds.all));
    const unit = list.find(x => x.clouds.all === value);
    return Number(unit?.dt) ?? 0;
  }

  static jacketDay(list: Array<ForecastUnit>): number {
    const value = Math.min(...list.map(x => x.main.feels_like));
    const unit = list.find(x => x.main.feels_like === value);
    return Number(unit?.dt) ?? 0;
  }
}