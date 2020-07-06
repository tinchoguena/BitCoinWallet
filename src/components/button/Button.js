import React from 'react';
import {Platform} from 'react-native';

import Colors from '../../constants/Colors';

import {SearchTextButton, ButtonContainer, SearchIcon, Text} from './styles';

export default function Button({
  func,
  bottomButton,
  iconName,
  iconSize,
  iconColor,
  text,
}) {
  return (
    <ButtonContainer
      bottomButton={bottomButton}
      onPress={() => {
        func();
      }}>
      <SearchIcon name={iconName} size={iconSize} color={iconColor} />
      <SearchTextButton
        color={Platform.OS === 'android' ? Colors.secondary : Colors.solid}>
        <Text>{text}</Text>
      </SearchTextButton>
    </ButtonContainer>
  );
}
