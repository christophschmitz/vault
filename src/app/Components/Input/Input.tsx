import React from 'react';
type InputProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

const Input = ({
  type,
  placeholder,
  value,
  onChange,
}: InputProps): JSX.Element => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
