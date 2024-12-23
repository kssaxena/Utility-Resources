import React from "react";

const Select = ({
  label,
  options = [],
  value,
  onChange,
  placeholder = "Select an option",
  disabled = false,
  required = false,
  error = "",
  name = "",
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

      {/* Select dropdown */}
      <select
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={`w-full bg-transparent px-4 py-2 text-base border rounded-lg focus:outline-none focus:ring-2 m-2 ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:ring-blue-500"
        } disabled:bg-gray-200 disabled:cursor-not-allowed`}
      >
        {/* Placeholder option */}
        <option value="" disabled>
          {placeholder}
        </option>

        {/* Options */}
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Error message */}
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default Select;
