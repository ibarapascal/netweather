export class InputAction {
  item: string;
  value: string | Array<string> | null | boolean;
  constructor() {
    this.item = '';
    this.value = null;
  }
}

export class SelectUnit {
  id: number;
  name: string;
  constructor() {
    this.id = 0;
    this.name = '';
  }
}

export class TableColumnsUnit {
  name: string;
  label: string;
  constructor() {
    this.name = '';
    this.label = '';
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
