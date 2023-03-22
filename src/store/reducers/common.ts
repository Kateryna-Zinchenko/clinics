export enum RequestState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  ERROR = 'ERROR',
}

export interface ISupplier {
  address: string;
  city: string;
  company_name: string;
  contact_name: string;
  contact_title: string;
  country: string;
  fax: string | null;
  homepage: string | null;
  phone: string;
  postal_code: string;
  region: string | null;
  supplier_id: number;
}
