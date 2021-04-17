import React from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

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
    <Card style={styles.restaurantCard} elevation={5}>
      <Card.Cover key={name} source={{ uri: photos[0] }} />
      <Card.Content style={styles.restaurantContent}>{name}</Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  restaurantCard: {
    margin: 8,
  },
  restaurantContent: {
    marginTop: 8,
  },
});
