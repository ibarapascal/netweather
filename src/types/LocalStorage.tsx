import { ErrorMessage } from "./BaseTypes";

export class LocalStorage {
    /**
   * Error message object
   */
  errorMessage: ErrorMessage;
  constructor() {
    this.errorMessage = new ErrorMessage();
  }
}
