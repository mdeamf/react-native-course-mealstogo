import React from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchWrapper}>
        <Searchbar />
      </View>
      <View style={styles.listWrapper}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
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
