import React, { useEffect, ChangeEvent } from 'react';

interface InputProps {
  id?: string;
  name?: string;
  inputClassName?: string;
  placeholder?: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void | null;
  value?: string | number;
}

const SearchInput = ({
  id,
  name,
  inputClassName,
  placeholder,
  onInputChange,
  value,
}: InputProps): JSX.Element => {
  return (
    <div className="form-control-group">
      <input
        type="search"
        id={id}
        name={name}
        className={`form-control${inputClassName ? ` ${inputClassName}` : ''}`}
        placeholder={placeholder}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onInputChange(e)}
        value={value}
      />
    </div>
  );
};

export default SearchInput;
