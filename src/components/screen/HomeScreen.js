import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import { HomeScreenStyle } from '../../styles/globalStyle';
import Logo from '../../assets/images/Logo.png';

const HomeScreen = () => {
  return (
    <ImageBackground source={Logo} style={HomeScreenStyle.background}>
      <View style={HomeScreenStyle.root}>
        <Text style={HomeScreenStyle.text}>HomeScreen</Text>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
