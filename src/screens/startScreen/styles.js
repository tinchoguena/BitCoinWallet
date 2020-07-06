import styled from 'styled-components/native';
import Colors from '../../constants/Colors';

const StartView = styled.View`
  flex: 1;
  background-color: ${Colors.primary};
  align-items: center;
`;

const ScreenWrapper = styled.View`
  flex: 1;
  background-color: ${Colors.primary};
  align-items: center;
  margin-top: 5px;
`;

const AddressWrapper = styled.View`
  height: 65%;
  width: 80%;
  align-items: center;
  justify-content: center;
`;

const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const Text = styled.Text`
  font-size: ${(props) => (props.small ? '18px' : '24px')};
  color: ${(props) => (props.black ? Colors.solid : Colors.secondary)};
  font-weight: ${(props) => (props.title ? '600' : '400')};
  flex-direction: row;
  margin-top: ${(props) => (props.marginTop ? '30px' : '0')};
  margin-bottom: ${(props) => (props.marginTop ? '10px' : '0')};
`;

const HistoryButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  align-self: flex-end;
  margin-top: 25px;
  margin-right: 4%;
`;

const ErrorMsj = styled.Text`
  padding-top: 3%;
  height: 40px;
  color: red;
  font-size: 16px;
`;

export {
  StartView,
  TitleContainer,
  ScreenWrapper,
  HistoryButton,
  ErrorMsj,
  AddressWrapper,
  Text,
};
