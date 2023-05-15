import React, { SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  errorMessage?: string;
  label?: string;
}

export const Select: React.FC<SelectProps> = ({
  errorMessage,
  name,
  label,
  placeholder,
  ...props
}) => {
  return (
    <div className="input">
      {/* <label htmlFor={`select-${name}`}>{label}</label>
      <input
        className="input"
        id={`input-${name}`}
        placeholder={placeholder}
        {...props}
      />
      {errorMessage && <span>Nome é obrigatório</span>} */}
    </div>
  );
};

export default Select;
