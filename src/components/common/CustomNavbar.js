import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PlayerScreen from '../screen/PlayerScreen';
import SettingScreen from '../screen/SettingScreen';
import MatcheScreen from '../screen/MatcheScreen';

const Tab = createBottomTabNavigator();

const SettingScreenName = 'Settings';
const PlayerScreenName = 'PLayer';
const MatcheScreenName = 'Match';

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
              iconName = focused ? 'ios-football' : 'md-football';
              break;
            case SettingScreenName:
              iconName = focused ? 'settings' : 'settings-outline';
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
      <Tab.Screen name={SettingScreenName} component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default CustomNavbar;
