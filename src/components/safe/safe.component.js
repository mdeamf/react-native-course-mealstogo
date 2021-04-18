import styled from 'styled-components/native';
import { StatusBar, SafeAreaView } from 'react-native';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;