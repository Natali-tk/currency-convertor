import { Currency } from '../types/Currency';
export type CurrencyState = {
  pending: boolean;
  currencies: Currency[];
  error: string | null;
};
