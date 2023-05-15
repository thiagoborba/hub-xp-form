import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  label?: string;
}

export const Input: React.FC<InputProps> = ({
  errorMessage,
  name,
  label,
  placeholder,
  ...props
}) => {
  return (
    <div className="input">
      <label htmlFor={`input-${name}`}>{label}</label>
      <input
        className="input"
        id={`input-${name}`}
        placeholder={placeholder}
        {...props}
      />
      {errorMessage && <span>Nome é obrigatório</span>}
    </div>
  );
};
