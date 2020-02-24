import { ProcessService } from "../../../services/ProcessService";

export class WTConstant {

  static readonly DATA_MAP = [
    {id: '1', attr: 'dt', dispName: 'Time', suffix: ''},
    {id: '2', attr: 'temp', dispName: 'Temperature', suffix: '°C'},
    {id: '3', attr: 'weather', dispName: 'Weather', suffix: ''},
    {id: '4', attr: 'speed', dispName: 'Wind Speed', suffix: 'm/s'},
    {id: '5', attr: 'deg', dispName: 'Wind Degree', suffix: '°'},
    {id: '6', attr: 'cloud', dispName: 'Cloud', suffix: '%'},
    {id: '7', attr: 'pressure', dispName: 'Pressure', suffix: 'Pa'},
    {id: '8', attr: 'feels_like', dispName: 'Temperature Feeling', suffix: '°C'},
  ] as const;

  /**
   * Weather forecast table display items' sub table
   */
  static readonly TABLE_NAME_LIST = [
    'feels_like',
    'dt',
    'weather',
    'temp',
    'speed',
    'deg',
    'pressure',
    'cloud',
  ] as const;
  static readonly TABLE_SUBMAP = ProcessService.obtainSubList(
    WTConstant.DATA_MAP,
    WTConstant.TABLE_NAME_LIST
  );
}

const tableAttrList = WTConstant.TABLE_SUBMAP.map(x => x.attr);
export type TableAttr = typeof tableAttrList[number];