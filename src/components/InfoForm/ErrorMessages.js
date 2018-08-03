const ErrorMessages = {
  FIELD_EMPTY: 'This field is required',
  TOO_SMALL: (min) => `Value must be at least ${min}`,
  TOO_LARGE: (max) => `Value must be at most ${max}`,
}

export default ErrorMessages;
