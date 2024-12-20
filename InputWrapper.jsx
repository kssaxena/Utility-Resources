import React from "react";

const Input = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  disabled = false,
  required = false,
  error = "",
  name = "",
  autoComplete = "off",
  className = "",
}) => {
  return (
    <div className={`w-full max-w-xs ${className} flex flex-col gap-2`}>
      {/* Label */}
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-white mb-1"
        >
          {label}
        </label>
      )}

      {/* Input field */}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        autoComplete={autoComplete}
        className={`w-full bg-transparent px-4 py-2 text-base border rounded-lg focus:outline-none focus:ring-2 m-2 ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:ring-blue-500"
        } disabled:bg-gray-200 disabled:cursor-not-allowed`}
      />

      {/* Error message */}
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default Input;
