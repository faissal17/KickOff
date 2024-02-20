import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PlayerScreen from '../screen/PlayerScreen';
import MatcheScreen from '../screen/MatcheScreen';

const Tab = createBottomTabNavigator();

const PlayerScreenName = 'PLayeres';
const MatcheScreenName = 'Matches';

const CustomNavbar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Match"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          const { name } = route;

          switch (name) {
            case MatcheScreenName:
              iconName = focused ? 'ios-football' : 'md-football';
              break;
            case PlayerScreenName:
              iconName = focused ? 'ios-person' : 'md-person';
              break;

            default:
              iconName = 'ellipsis-horizontal';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarActiveTintColor="tomato"
      tabBarInactiveTintColor="grey"
      tabBarLabelStyle={{ paddingBottom: 10, fontSize: 10 }}
      tabBarStyle={{ padding: 10, height: 70 }}
    >
      <Tab.Screen name={MatcheScreenName} component={MatcheScreen} />
      <Tab.Screen name={PlayerScreenName} component={PlayerScreen} />
    </Tab.Navigator>
  );
};

export default CustomNavbar;
