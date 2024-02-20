import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../components/screen/HomeScreen';
import LandingPageScreen from '../components/screen/LandingPageScreen';

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPageScreen">
        <Stack.Screen name="Matches" component={HomeScreen} />
        <Stack.Screen name="Get Started" component={LandingPageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
