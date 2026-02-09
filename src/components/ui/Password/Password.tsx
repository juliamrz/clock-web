import React, { useState } from 'react';
import './Password.css';

interface PasswordProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
}

const Password = (props: PasswordProps) => {
  const {
    value,
    onChange,
    name,
    placeholder = 'Password',
    error,
    disabled = false,
  } = props;

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="Password">
      <div className="Password__field">
        <input
          id={name}
          name={name}
          type={isVisible ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={!!error}
        />

        <button
          type="button"
          className="Password__toggle"
          onClick={() => setIsVisible((v) => !v)}
          aria-label={isVisible ? 'Hide password' : 'Show password'}
        >
          {isVisible ? '🙈' : '👁'}
        </button>
      </div>

      {error && <span className="Password__error">{error}</span>}
    </div>
  );
};

export default Password;
