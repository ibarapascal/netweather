export class InputAction {
  item: string;
  value: string | Array<string> | null;
  constructor() {
    this.item = '';
    this.value = null;
  }
}

export class ErrorMessage {
  type: string;
  head: string;
  content: string;
  res?: string;
  constructor() {
    this.type = '';
    this.head = '';
    this.content = '';
  }
}
