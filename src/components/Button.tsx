/* eslint-disable import/extensions */
import React from 'react';

export interface ButtonProps {
  label?: string | 'Button',
  disabled?: boolean,
  showIcon?: boolean,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  icon?: string,
  className?: string,
}
   
const Button: React.FC<ButtonProps> = ({
  label = 'Button',
  icon = 'Icon-add',
  disabled = false,
  showIcon = false,
  className = "",
  onClick,
  ...rest
}): any => {
  return (
    <>
      <div className='button-wrapper'>
        <button
          disabled={disabled}
          onClick={onClick}
          className={`button ${className}`}
          {...rest}
        >
            {label}
            {showIcon && <>
                {icon}
            </>}
        </button>
      </div>
    </>
  );
};
export default Button;