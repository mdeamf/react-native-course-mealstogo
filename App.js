import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import {
  useFonts as useOswald,
  Lato_400Regular,
} from '@expo-google-fonts/lato';
import {
  useFonts as useLato,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';

import { theme } from './src/styles/theme';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurant.screen';

export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  const Tab = createBottomTabNavigator();
  const TabIcon = {
    Restaurants: 'fast-food',
    Map: 'map',
    Settings: 'settings',
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName = TabIcon[route.name];
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={RestaurantsScreen} />
            <Tab.Screen name="Settings" component={RestaurantsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
