/* eslint-disable import/extensions */
import React from "react";

export interface ButtonProps {
  label?: string | "Button";
  disabled?: boolean;
  showIcon?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: string;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}

const Button: React.FC<ButtonProps> = ({
  label = "Button",
  icon = "Icon-add",
  disabled = false,
  showIcon = false,
  className = "",
  onClick,
  ref,
  ...rest
}): any => {
  return (
    <>
      <div className="button-wrapper" ref={ref}>
        <button
          disabled={disabled}
          onClick={onClick}
          className={`button ${className}`}
          {...rest}
        >
          {label}
          {showIcon && <>{icon}</>}
        </button>
      </div>
    </>
  );
};
export default Button;
