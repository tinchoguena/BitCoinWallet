import styled from 'styled-components/native';
import Colors from '../../constants/Colors';

const ScreenView = styled.View`
  flex: 1;
  background-color: ${Colors.primary};
`;

const PageWrapper = styled.View`
  flex: 1;
  margin-top: 25px;
  margin-bottom: 3%;
  align-items: center;
`;

const BalanceWrapper = styled.View`
  flex: 1;
  align-items: flex-start;
  width: 80%;
  margin-top: 60px;
`;

const TitleWrapper = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 5px;
  margin-bottom: 4%;
`;

const ErrorWrapper = styled.View`
  align-items: center;
  width: 70%;
`;

const LoadingWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const AddressWrapper = styled.View`
  height: 40%;
  width: 80%;
  align-items: center;
  justify-content: center;
`;

const NavWrapper = styled.View`
  flex-direction: row;
  margin-top: 20px;
  height: 70px;
  align-items: center;
  justify-content: space-between;
`;
const Label = styled.Text`
  font-size: 18px;
  font-weight: 500;
`;

const GoBackText = styled.Text`
  font-size: 13px;
  font-weight: 500;
  margin-left: 4px;
  color: ${Colors.secondary};
`;

const BalanceTitle = styled.Text`
  font-size: 22px;
  font-weight: 600;
`;

const SearchText = styled.Text`
  font-size: 18px;
  font-weight: 400;
  width: 80%;
`;

const GoBack = styled.TouchableOpacity`
  width: 200px;
  flex-direction: row;
  margin-left: 4%;
`;

const HistoryButton = styled.TouchableOpacity`
  margin-right: 4%;
`;

const Text = styled.Text`
  font-size: ${(props) => (props.small ? '18px' : '24px')};
  color: ${(props) => (props.black ? Colors.solid : Colors.secondary)};
  font-weight: ${(props) => (props.title ? '600' : '400')};
  flex-direction: row;
  margin-top: ${(props) => (props.marginTop ? '30px' : '0')};
  margin-bottom: ${(props) => (props.marginTop ? '10px' : '0')};
`;

export {
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
};
