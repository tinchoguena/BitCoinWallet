import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import QRCode from 'react-native-qrcode-svg';

import {setError} from '../../store/actions/bitCoinActions';
import {getAddressBalance} from '../../store/services/fetchBitCoin';

import {
  ScreenView,
  GoBack,
  PageWrapper,
  TitleWrapper,
  Label,
  SearchText,
  LoadingWrapper,
  ErrorWrapper,
  AddressWrapper,
  Text,
  BalanceWrapper,
  BalanceTitle,
  HistoryButton,
  NavWrapper,
  GoBackText,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../constants/Colors';

const WalletScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const storeBalance = useSelector((state) => state.balance);
  const [localAddress, setLocalAddress] = useState(undefined);

  const goBackHandler = () => {
    navigation.navigate({routeName: 'Start'});
    dispatch(setError(''));
  };

  const getLocalAddress = async () => {
    try {
      const value = await AsyncStorage.getItem('localAddress');
      const parsedValue = JSON.parse(value);
      console.log('parsed value on local address', parsedValue);
      setLocalAddress(parsedValue);
      dispatch(getAddressBalance(parsedValue.address));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    let timeId = setTimeout(() => getLocalAddress(), 9000);
    return () => clearTimeout(timeId);
  });

  return (
    <ScreenView>
      <NavWrapper>
        <GoBack
          onPress={() => {
            goBackHandler();
          }}>
          <Icon name="chevron-left" size={20} color={Colors.secondary} />
          {localAddress && (
            <GoBackText small black title>
              Generate new address
            </GoBackText>
          )}
        </GoBack>
        <HistoryButton
          onPress={() => {
            navigation.navigate({routeName: 'History'});
          }}>
          <Icon name="history" size={30} color={Colors.secondary} />
        </HistoryButton>
      </NavWrapper>
      {!localAddress ? (
        <LoadingWrapper>
          <ActivityIndicator size="large" color={Colors.secondary} />
        </LoadingWrapper>
      ) : (
        <PageWrapper>
          <>
            {error ? (
              <ErrorWrapper>
                <Label>An error occured: </Label>
                <SearchText>{error}</SearchText>
              </ErrorWrapper>
            ) : (
              <>
                <AddressWrapper>
                  {!localAddress.address ? (
                    <>
                      {loading ? (
                        <ActivityIndicator
                          size="large"
                          color={Colors.secondary}
                        />
                      ) : (
                        <>
                          <QRCode
                            value="Placeholder text"
                            color={Colors.solid}
                            backgroundColor={'white'}
                            size={150}
                          />
                          <Text black small marginTop>
                            Your new adress will show here
                          </Text>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <Text black marginTop>
                        QR Address:
                      </Text>
                      <QRCode
                        value={localAddress.address}
                        color={Colors.solid}
                        backgroundColor={'white'}
                        size={150}
                      />
                      <Text black marginTop>
                        Text Address:
                      </Text>
                      <Text small black>
                        {localAddress.address}
                      </Text>
                    </>
                  )}
                </AddressWrapper>
                {!storeBalance ? (
                  <>
                    <LoadingWrapper>
                      <ActivityIndicator
                        size="large"
                        color={Colors.secondary}
                      />
                    </LoadingWrapper>
                  </>
                ) : (
                  <BalanceWrapper>
                    <TitleWrapper>
                      <BalanceTitle>Balance:</BalanceTitle>
                    </TitleWrapper>
                    <TitleWrapper>
                      <Label> Balance: </Label>
                      <SearchText>{storeBalance.balance}</SearchText>
                    </TitleWrapper>
                    <TitleWrapper>
                      <Label> Unconfirmed Balance: </Label>
                      <SearchText>
                        {storeBalance.unconfirmed_balance}
                      </SearchText>
                    </TitleWrapper>
                    <TitleWrapper>
                      <Label> Final Balance: </Label>
                      <SearchText>{storeBalance.final_balance}</SearchText>
                    </TitleWrapper>
                  </BalanceWrapper>
                )}
              </>
            )}
          </>
        </PageWrapper>
      )}
    </ScreenView>
  );
};

WalletScreen.navigationOptions = {
  header: null,
};

export default WalletScreen;
