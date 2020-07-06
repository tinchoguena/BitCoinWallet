export const ADD_ADDRESS = 'ADD_ADDRESS';
export const ADD_ADDRESS_BALANCE = 'ADD_ADDRESS_BALANCE';
export const ADD_HISTORY_BALANCE = 'ADD_HISTORY_BALANCE';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';

export const addAddress = (address) => {
  return {
    type: ADD_ADDRESS,
    address,
  };
};
export const addAddressBalance = (balance) => {
  return {
    type: ADD_ADDRESS_BALANCE,
    balance,
  };
};
export const addHistoryBalance = (historyBalance) => {
  return {
    type: ADD_HISTORY_BALANCE,
    historyBalance,
  };
};
export const setLoading = (bool) => {
  return {
    type: SET_LOADING,
    bool,
  };
};
export const setError = (error) => {
  return {
    type: SET_ERROR,
    error,
  };
};
