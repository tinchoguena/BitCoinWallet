import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';
import {ActivityIndicator} from 'react-native';
import {setError} from '../../store/actions/bitCoinActions';
import {getHistoryBalance} from '../../store/services/fetchBitCoin';

import {
  ScreenView,
  GoBack,
  PageWrapper,
  TitleWrapper,
  Label,
  LoadingWrapper,
  ItemHistoryWrapper,
  TitleBlack,
  TitleWhite,
  ScrollWrapper,
  TransactionWrapper,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../constants/Colors';
const HistoryScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const history = useSelector((state) => state.historyBalance);

  const goBackHandler = () => {
    navigation.goBack();
    dispatch(setError(''));
  };

  const getLocalAddress = async () => {
    try {
      const value = await AsyncStorage.getItem('localAddress');
      const parsedValue = JSON.parse(value);
      dispatch(getHistoryBalance(parsedValue.address));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getLocalAddress();
  }, []);

  return (
    <ScreenView>
      <GoBack
        onPress={() => {
          goBackHandler();
        }}>
        <Icon name="chevron-left" size={20} color={Colors.secondary} />
      </GoBack>
      {loading ? (
        <LoadingWrapper>
          <ActivityIndicator size="large" color={Colors.secondary} />
        </LoadingWrapper>
      ) : (
        <PageWrapper>
          <>
            {!history ? (
              <LoadingWrapper>
                <ActivityIndicator size="large" color={Colors.secondary} />
              </LoadingWrapper>
            ) : (
              <>
                <TitleWrapper>
                  <Label>Transactions History: </Label>
                </TitleWrapper>
                {history.length >= 1 ? (
                  <ScrollWrapper showsVerticalScrollIndicator={false}>
                    {history.map((item) => (
                      <ItemHistoryWrapper key={item.hash}>
                        <TransactionWrapper>
                          <TitleBlack>Total Amount: </TitleBlack>
                          <TitleWhite>{item.total}</TitleWhite>
                        </TransactionWrapper>
                        <TransactionWrapper>
                          <TitleBlack>Date: </TitleBlack>
                          <TitleWhite>
                            {Moment(item.received).format(
                              'MMMM Do, YYYY H:mma',
                            )}
                          </TitleWhite>
                        </TransactionWrapper>
                      </ItemHistoryWrapper>
                    ))}
                  </ScrollWrapper>
                ) : (
                  <LoadingWrapper>
                    <TitleBlack>
                      There are no transactions on history
                    </TitleBlack>
                  </LoadingWrapper>
                )}
              </>
            )}
          </>
        </PageWrapper>
      )}
    </ScreenView>
  );
};

HistoryScreen.navigationOptions = {
  header: null,
};

export default HistoryScreen;
