import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight} px`};
`;

const SearchContainer = styled(View)`
  padding: 8px;
`;

const ListContainer = styled(View)`
  flex: 1;
  flex-grow: 1;
  padding: 8px;
`;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <ListContainer>
        <RestaurantInfoCard />
      </ListContainer>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchWrapper: {
    padding: 8,
  },
  listWrapper: {
    flex: 1,
    flexGrow: 1,
    padding: 8,
  },
});
