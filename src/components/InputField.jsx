import { TextField } from '@mui/material';

const InputField = ({
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
  isMultiline,
  maxRows,
  minRows,
  inputProps,
}) => {
  return (
    <div className={`relative ${wrapperClassName || ''}`}>
      <TextField
        id={id}
        label={label}
        variant={variant || 'outlined'}
        name={name}
        className={`w-full focus:shadow-gray-900 ${className || ''}`}
        type={type}
        error={isError}
        inputProps={{
          onChange: handleChange,
          onBlur: handleBlur,
          ...inputProps,
        }}
        value={value}
        multiline={isMultiline || false}
        maxRows={maxRows}
        minRows={minRows}
        fullWidth
      />

      {isError && (
        <p className="!my-1 absolute -bottom-6 right-0 text-end text-xs font-medium text-error-100">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export { InputField };
