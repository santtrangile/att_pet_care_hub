import React from "react";

interface InputFieldProps {
  placeholder?: string | "";
  type?: string;
  name: string;
  label?: string;
  disabled?: boolean | false;
  errorMessage?: string;
  className?: string | "p-badge";
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
  maxLength?: number;
  minLength?: number;
  value?: string | number;
  width?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  type = "text",
  placeholder = type === "number" ? "" : "",
  className,
  name="",
  label = "Label",
  disabled = false,
  maxLength = 100,
  minLength = 300,
  errorMessage = "",
  onChange,
  value,
  width,
  ...rest
}) => {
  return (
    <>
      <div className={"input-wrapper"} style={width ? {width: width} : {}}>
        <div className="label">{label}</div>
        <input
          className="input-field"
          placeholder={placeholder}
          type={type}
          name={name}
          disabled={disabled}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          minLength={minLength}
          style={{
            ...(errorMessage !== "" ? { borderColor: "red" } : {}),
          }}
          autoComplete="off"
          {...rest}
        />
        <div className="error">{errorMessage}</div>
      </div>
    </>
  );
};

export default InputField;
