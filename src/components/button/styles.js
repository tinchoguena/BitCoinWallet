import styled from 'styled-components/native';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const Text = styled.Text`
  font-size: 18px;
  color: ${Colors.solid};
  font-weight: 600;
  flex-direction: row;
`;

const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-horizontal: 15px;
  border-radius: 10px;
  border: 1px solid #f5f5f5;
  background-color: #fff;
  width: 60%;
  height: 40px;
  margin-top: ${(props) => (props.bottomButton ? 'auto' : '6%')};
  bottom: ${(props) => (props.bottomButton ? '40px' : '0px')};
`;

const SearchTextButton = styled.View`
  font-size: 16px;
  font-weight: 400;
`;

const SearchIcon = styled(Icon)`
  padding-right: 10px;
`;

export {SearchTextButton, ButtonContainer, SearchIcon, Text};
