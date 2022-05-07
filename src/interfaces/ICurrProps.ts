export interface ICurrProps {
  currencyOptions: Array<string>;
  selectedCurrency: string;
  onChangeCurrency?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeAmount?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  amount: number;
}
