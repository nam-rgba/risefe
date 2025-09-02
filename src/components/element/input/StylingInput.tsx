import React from "react";
import clsx from "clsx";
import { InputProps } from "./input.type";
import './Input.scss';

export const StylingInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, className, value, variant, type, onChange, onBlur, name, ...rest }, ref) => {
    const baseCln = 'w-full h-10 px-3';

    return (
      <input 
        placeholder={placeholder}
        value={value}
        className={clsx(
          baseCln,
          className,
          variant
        )}
        type={type}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        autoComplete="off"
        {...rest}
      />
    );
  }
);

StylingInput.displayName = "StylingInput";
