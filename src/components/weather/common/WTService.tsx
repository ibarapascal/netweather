import { ForecastUnit } from "../../../types/interface/GetForecast";
import { TableAttr } from "./WTConstant";

export type TableUnit = {
  [K in TableAttr]: string | number;
}

export class WTService {
  static generateTableData(list: Array<ForecastUnit>): Array<TableUnit> {
    return list.map(item => ({
      dt: item.dt,
      weather: item.weather[0].main,
      temp: item.main.temp,
      speed: item.wind.speed,
      deg: item.wind.deg,
      pressure: item.main.pressure,
      cloud: item.clouds.all,
      feels_like: item.main.feels_like
    }));
  }
}