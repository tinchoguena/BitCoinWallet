import {
  addAddress,
  addAddressBalance,
  addHistoryBalance,
  setLoading,
  setError,
} from '../actions/bitCoinActions';

export const generateAdressEndpoint = () => {
  return (dispatch) => {
    dispatch(setLoading(true));

    (async () => {
      try {
        const response = await fetch(
          'https://api.blockcypher.com/v1/btc/test3/addrs',
          {
            method: 'POST',
          },
        );
        if (!response.ok) {
          dispatch(setError('There was an error generating address'));
        }
        dispatch(setLoading(false));

        const data = await response.json();
        dispatch(addAddress(data));
      } catch (e) {
        dispatch(setError('There was an error generating address'));
      }
    })();
  };
};

export const getAddressBalance = (address) => {
  return (dispatch) => {
    dispatch(setLoading(true));

    (async () => {
      try {
        const response = await fetch(
          `https://api.blockcypher.com/v1/btc/test3/addrs/${address}/balance`,
        );
        if (!response.ok) {
          const errorData = await response.json();
          dispatch(setError(errorData.error));
        }
        dispatch(setLoading(false));

        const data = await response.json();
        dispatch(addAddressBalance(data));
      } catch (e) {
        dispatch(setError('There was an error getting address balance'));
      }
    })();
  };
};

export const getHistoryBalance = (address) => {
  return (dispatch) => {
    dispatch(setLoading(true));

    (async () => {
      try {
        const response = await fetch(
          `https://api.blockcypher.com/v1/btc/test3/addrs/${address}/full`,
        );
        if (!response.ok) {
          const errorData = await response.json();
          dispatch(setError(errorData.error));
        }
        dispatch(setLoading(false));

        const data = await response.json();
        dispatch(addHistoryBalance(data.txs));
      } catch (e) {
        dispatch(setError('There was an error getting address history'));
      }
    })();
  };
};
