import Constants from 'expo-constants';
import styled from 'styled-components/native';
import { FlatList  } from 'react-native';
import { IncidentsInterface } from '../../interfaces/IncidentInterface';




export const Image = styled.Image``;




export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  padding-top: ${Constants.statusBarHeight + 20};
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderText = styled.Text`
  font-size: 15px;
  color: #737380;
`;
export const HeaderTextBold = styled.Text`
  font-weight: bold;
`;

export const Title = styled.Text`
  font-size: 30px;
  margin-bottom: 16px;
  margin-top: 48px;
  color: #13131a;
  font-weight: bold;
`;
export const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #737380;
`;
export  const StyledFlatList = styled(
          FlatList as new () => FlatList<IncidentsInterface>
        )`
          margin-top: 32px;
        `;

export const IncidentslistChildren = styled.View`
  padding: 32px;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 16px;
`;

export const IncidentProperty = styled.Text`
  font-size: 14px;
  color: #41414d;
  font-weight: bold;
`;

export const IncidentValue = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  margin-bottom: 24px;
  color: #737380;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const TextButton = styled.Text`
  color: #e02041;
  font-size: 15px;
  font-weight: bold;
`;
