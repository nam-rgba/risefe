import clsx from "clsx";
import React from "react";
import { ButtonProps } from "./button.type";
import { buttonVariants, buttonSizes } from "./button.config";
import './Button.scss'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "sm",
      children,
      isLoading = false,
      disabled,
      className,
      leftIcon,
      rightIcon,
      type="button",
      ...rest
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
      + " cursor-pointer";

    return (
      <button
        ref={ref}
        className={clsx(
          base,
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        disabled={disabled || isLoading}
        type={type}
        {...rest}
      >
        {isLoading ? (
          <span className="animate-spin w-4 h-4 border-2 border-t-transparent border-white rounded-full mr-2" />
        ) : (
          leftIcon && <span className="mr-2">{leftIcon}</span>
        )}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
