import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchWrapper}>
          <Text>Search</Text>
        </View>
        <View style={styles.listWrapper}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchWrapper: {
    padding: 8,
    width: 'auto',
    backgroundColor: 'purple',
  },
  listWrapper: {
    flex: 1,
    flexGrow: 1,
    padding: 8,
    backgroundColor: 'green',
  },
});
