import React from 'react';
import shortid from 'shortid';

interface IProps {
  currency: string[];
  baseCurrency: string;
  handleChangeSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Selector: React.FC<IProps> = ({
  currency,
  baseCurrency,
  handleChangeSelect,
}) => {
  return (
    <div className="select-box">
      <select
        className="select-box__cur"
        value={baseCurrency}
        onChange={handleChangeSelect}
      >
        {currency.map(option => (
          <option key={shortid.generate()} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
