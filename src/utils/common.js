export const getErrorMessageFormAPI = (error) =>
  error?.message || error?.response?.data?.message;
