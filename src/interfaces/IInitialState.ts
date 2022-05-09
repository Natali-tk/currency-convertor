import { ICurrency } from './ICurrency';

export interface IInitialState {
  currencies: ICurrency[];
  fromCurrency: string;
  toCurrency: string;
  isLoading: boolean;
  error: string | null;
}
