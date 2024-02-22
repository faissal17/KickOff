import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../components/screen/HomeScreen';
import LandingPageScreen from '../components/screen/LandingPageScreen';
import MatchDetailScreen from '../components/screen/MatchDetailScreen';

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="KickOff">
        <Stack.Screen name="Matches" component={HomeScreen} />
        <Stack.Screen name="KickOff" component={LandingPageScreen} />
        <Stack.Screen name="Match Details" component={MatchDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
