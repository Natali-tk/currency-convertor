import React from 'react';
import { CurrProps } from '../types/CurrProps';
import shortid from 'shortid';
import { ConvertorBox, InputAmount, Select } from '../styles/styles';

export const CurrencyRow: React.FC<CurrProps> = ({
  currencyOptions,
  selectedCurrency,
  amount,
  onChangeCurrency,
  onChangeAmount,
}) => {
  return (
    <ConvertorBox>
      <InputAmount
        type="number"
        pattern="^\d+(\.|\,)\d{2}"
        value={amount <= 0 ? '' : Number(amount.toFixed(4))}
        onChange={onChangeAmount}
      />
      <Select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map(option => (
          <option key={shortid.generate()} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </ConvertorBox>
  );
};
