import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const SelectBox = ({
  id,
  name,
  variant,
  className,
  type,
  isError,
  handleChange,
  handleBlur,
  value,
  label,
  errorMessage,
  wrapperClassName,
  options,
  errorClassName,
}) => {
  return (
    <div className={wrapperClassName || ''}>
      <FormControl fullWidth>
        <InputLabel className={`${isError ? '!text-error-100' : ''}`}>
          {label}
        </InputLabel>
        <Select
          id={id}
          label={label}
          variant={variant || 'outlined'}
          name={name}
          className={`w-full focus:shadow-gray-900 ${className || ''}`}
          type={type}
          error={isError}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          fullWidth
        >
          {options &&
            options.length > 0 &&
            options?.map(({ label, value }) => (
              <MenuItem key={label} value={value}>
                {label}
              </MenuItem>
            ))}
        </Select>
      </FormControl>

      {isError && (
        <p
          className={`!my-1 absolute -bottom-6 right-0 text-end text-xs font-medium text-error-100 ${
            errorClassName || ''
          }`}
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export { SelectBox };
