import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {ActivityIndicator, Alert} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Button from '../../components/button/Button';

import {
  generateAdressEndpoint,
  getAddressBalance,
} from '../../store/services/fetchBitCoin';

import {
  StartView,
  TitleContainer,
  ScreenWrapper,
  HistoryButton,
  ErrorMsj,
  AddressWrapper,
  Text,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../constants/Colors';

const StartScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [searchErrorMsj, setSearchErrorMsj] = useState('');
  const storeAddress = useSelector((state) => state.address);
  const loading = useSelector((state) => state.loading);

  const setLocalAddress = async () => {
    try {
      await AsyncStorage.setItem('localAddress', JSON.stringify(storeAddress));
    } catch (e) {
      console.log(e);
    }
  };

  const saveAddressHandler = () => {
    setLocalAddress();
    dispatch(getAddressBalance(storeAddress.address));
    alertPopUp();
  };

  const alertPopUp = () => {
    Alert.alert(
      'Save Address?',
      'Are you sure that you want to save address and continue?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Continue',
          onPress: () => navigation.navigate({routeName: 'Wallet'}),
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <StartView>
      <HistoryButton
        onPress={() => {
          navigation.navigate({routeName: 'History'});
        }}>
        <Icon name="history" size={30} color={Colors.secondary} />
      </HistoryButton>
      <ScreenWrapper>
        <Icon name="btc" size={40} color={Colors.secondary} />
        <TitleContainer>
          <Text black title>
            BitCoin
          </Text>
          <Text title>Wallet</Text>
        </TitleContainer>
        <Button
          func={() => dispatch(generateAdressEndpoint())}
          iconName="plus"
          iconSize={16}
          iconColor={Colors.solid}
          text="Generate new address"
        />
        <AddressWrapper>
          {!storeAddress.address ? (
            <>
              {loading ? (
                <ActivityIndicator size="large" color={Colors.secondary} />
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
                value={storeAddress.address}
                color={Colors.solid}
                backgroundColor={'white'}
                size={150}
              />
              <Text black marginTop>
                Text Address:
              </Text>
              <Text small black>
                {storeAddress.address}
              </Text>
            </>
          )}
        </AddressWrapper>
        {storeAddress.address ? (
          <Button
            func={() => {
              saveAddressHandler();
            }}
            bottomButton={true}
            iconName="floppy-o"
            iconSize={16}
            iconColor={Colors.solid}
            text="Save address"
          />
        ) : (
          <Button
            func={() => {
              navigation.navigate({routeName: 'Wallet'});
            }}
            bottomButton={true}
            iconName="bitcoin"
            iconSize={16}
            iconColor={Colors.solid}
            text="Go to wallet"
          />
        )}
        {searchErrorMsj ? <ErrorMsj>{searchErrorMsj}</ErrorMsj> : null}
      </ScreenWrapper>
    </StartView>
  );
};

StartScreen.navigationOptions = {
  header: null,
};

export default StartScreen;
