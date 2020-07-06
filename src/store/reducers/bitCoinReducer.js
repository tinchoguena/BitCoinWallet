import {
  ADD_ADDRESS,
  ADD_ADDRESS_BALANCE,
  ADD_HISTORY_BALANCE,
  SET_LOADING,
  SET_ERROR,
} from '../actions/bitCoinActions';

const initialState = {
  address: {},
  balance: {},
  historyBalance: [],
  loading: false,
  error: '',
};

const bitCoinReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ADDRESS:
      return {
        ...state,
        address: action.address,
        loading: false,
      };
    case ADD_ADDRESS_BALANCE:
      return {
        ...state,
        balance: action.balance,
        loading: false,
      };
    case ADD_HISTORY_BALANCE:
      return {
        ...state,
        historyBalance: action.historyBalance,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.bool,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default bitCoinReducer;
