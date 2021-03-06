import { ErrorMessage } from './BaseTypes';

export class LocalStorage {
    /**
   * Error message object
   */
  errorMessage: ErrorMessage;
  /**
   * api key
   */
  apiKey: string;
  /**
   * city selected
   */
  citySelected: string;
  /**
   * api request loading status flag
   */
  loading: boolean;
  constructor() {
    this.errorMessage = new ErrorMessage();
    this.apiKey = 'b6907d289e10d714a6e88b30761fae22';
    this.citySelected = '';
    this.loading = false;
  }
}
