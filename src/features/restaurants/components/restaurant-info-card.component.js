import React from 'react';
import styled from 'styled-components/native';

import { Card } from 'react-native-paper';

const Restaurant = styled(Card)`
  margin: ${(props) => props.theme.space.md};
`;

const Cover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space.lg};
`;

const Content = styled(Card.Content)`
  margin-top: ${(props) => props.theme.space.md};
`;

const Info = styled.View``;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.text.primary};
`;

const Address= styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.text.primary};
`

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/02/messy-pizza-on-a-black-table.jpg',
    ],
    address = '100 Random Street',
    rating = 4,
    isOpenNow = true,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Restaurant elevation={5}>
      <Cover key={name} source={{ uri: photos[0] }} />
      <Content>
      <Info>
        <Title>{name}</Title>
        <Address>{address}</Address>
      </Info>
      </Content>
    </Restaurant>
  );
};
