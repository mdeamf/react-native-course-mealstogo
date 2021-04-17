import React from 'react';
import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

const Restaurant = styled(Card)`
  margin: 8px;
`;

const Cover = styled(Card.Cover)``;

const Content = styled(Card.Content)`
  margin-top: 8px;
`;

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
        <Title>{name}</Title>
      </Content>
    </Restaurant>
  );
};
