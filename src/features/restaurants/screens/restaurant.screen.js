import React from 'react';
import styled from 'styled-components/native';
import { FlatList, SafeAreaView, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { SafeArea } from '../../../components/safe/safe.component';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space.md};
`;

const ListContainer = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>

      <ListContainer
        data={[{ name: 'Test 1' }, { name: 'Test 2' }, { name: 'Test 3' }]}
        renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
