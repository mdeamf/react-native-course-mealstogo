import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Searchbar, ActivityIndicator } from 'react-native-paper';

import { SafeArea } from '../../../components/safe/safe.component';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space.md};
`;

const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ListContainer = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>

      {isLoading && (
        <LoadingContainer>
          <ActivityIndicator animating={true} color={'tomato'} size={'large'} />
        </LoadingContainer>
      )}

      {!isLoading && (
        <ListContainer
          data={restaurants}
          renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 16 }}
        />
      )}
    </SafeArea>
  );
};
