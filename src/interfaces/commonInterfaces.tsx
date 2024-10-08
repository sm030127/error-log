export interface Car {
  make: string;
  model: string;
  price: number;
}

export interface defaultColDef {
  sortable: boolean;
  filter: boolean;
  resizable: boolean;
}

export interface Questions {
  name: string;
  forum: string;
  date: string;
  difficulty: string;
  time: string;
  result: string;
  mistakeAndNotes: string;
}
