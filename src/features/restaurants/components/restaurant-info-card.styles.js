import styled from 'styled-components/native';

import { Card } from 'react-native-paper';
import { Text } from '../../../components/text/text.component';

export const Restaurant = styled(Card)`
  margin: ${(props) => props.theme.space.md};
`;

export const Cover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space.lg};
`;

export const Content = styled(Card.Content)`
  margin-top: ${(props) => props.theme.space.md};
`;

export const Info = styled.View``;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.text.primary};
`;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.text.primary};
`;

export const Icons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Rating = styled.View`
  flex-direction: row;
  margin: ${(props) => props.theme.space.md} 0;
`;

export const Status = styled.View`
  flex-direction: row;
`;

export const ClosedTemporarily = styled(Text)`
  color: ${(props) => props.theme.colors.text.error};
`;