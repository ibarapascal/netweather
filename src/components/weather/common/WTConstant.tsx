import { ProcessService } from "../../../services/ProcessService";

export class WTConstant {

  static readonly DATA_MAP = [
    {id: '1', attr: 'dt', displayName: 'Time'},
    {id: '2', attr: 'temp', displayName: 'Temperature'},
    {id: '3', attr: 'weather', displayName: 'Weather'},
    {id: '4', attr: 'pressure', displayName: 'Pressure'},
    {id: '5', attr: 'speed', displayName: 'Wind Speed'},
    {id: '6', attr: 'deg', displayName: 'Wind deg'},
    {id: '7', attr: 'cloud', displayName: 'Cloud'},
    {id: '8', attr: 'feels_like', displayName: 'Temperature Feeling'},
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