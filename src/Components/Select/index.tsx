import React, { SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  errorMessage?: string;
  label?: string;
  data: {
    value: string;
    label: string;
  }[];
}

const Select: React.FC<SelectProps> = ({
  label,
  defaultValue,
  name,
  errorMessage,
  data,
}) => {
  return (
    <div className="field">
      <label htmlFor={`select-${name}`}>{label}</label>
      <select id={`select-${name}`} defaultValue={defaultValue}>
        <option disabled value="">
          Selecione uma opção
        </option>
        {data.map((item) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </select>
      {errorMessage && <span>Cargo é obrigatório</span>}
    </div>
  );
};

export default Select;
