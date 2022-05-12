import React from 'react';
import shortid from 'shortid';
import { SelectBox, Select } from '../styles/styles';

type Props = {
  currencySelect: string[];
  baseCurrency: string;
  handleChangeSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Selector: React.FC<Props> = ({
  currencySelect,
  baseCurrency,
  handleChangeSelect,
}) => {
  return (
    <SelectBox>
      <Select
        className="select-box__cur"
        value={baseCurrency}
        onChange={handleChangeSelect}
      >
        {currencySelect.map(option => (
          <option key={shortid.generate()} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </SelectBox>
  );
};
