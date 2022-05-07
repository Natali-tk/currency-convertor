import React from 'react';
import { ICurrProps } from '../interfaces/ICurrProps';
import shortid from 'shortid';

export const CurrencyRow: React.FC<ICurrProps> = ({
  currencyOptions,
  selectedCurrency,
  amount,
  onChangeCurrency,
  onChangeAmount,
}) => {
  return (
    <div className="convertor-box">
      <input
        type="number"
        pattern="^\d+(\.|\,)\d{2}"
        className="input-amount"
        value={Number(amount.toFixed(2))}
        onChange={onChangeAmount}
      />
      <select
        className="select-box__cur"
        value={selectedCurrency}
        onChange={onChangeCurrency}
      >
        {currencyOptions.map(option => (
          <option key={shortid.generate()} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
