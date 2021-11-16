import React, { useEffect, ChangeEvent } from 'react';

interface InputProps {
  type?: string;
  id?: string;
  name?: string;
  label?: string;
  inputClassName?: string;
  placeholder?: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void | null;
  disabled?: boolean | undefined;
  value?: string | number;
  required?: boolean | undefined;
  optional?: boolean | undefined;
  hasError?: boolean | undefined;
}

const SearchInput = ({
  type,
  id,
  name,
  label,
  inputClassName,
  placeholder,
  onInputChange,
  disabled,
  value,
  optional,
  hasError,
}: InputProps): JSX.Element => {
  return (
    <div className="form-control-group">
      <label htmlFor={id} className="form-label">
        {label}{' '}
        {optional && <span className="optional-input-label">(optional)</span>}
      </label>
      <input
        type="search"
        id={id}
        name={name}
        className={`form-control${inputClassName ? ` ${inputClassName}` : ''}${
          hasError ? ' has-error' : ''
        }`}
        placeholder={placeholder}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onInputChange(e)}
        disabled={disabled}
        value={value}
      />
    </div>
  );
};

export default SearchInput;
