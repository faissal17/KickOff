import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import { LandingPageScreenStyle } from '../../styles/globalStyle';
import Logo from '../../assets/images/Logo.png';

const LandingPageScreen = () => {
  return (
    <ImageBackground source={Logo} style={LandingPageScreenStyle.background}>
      <View style={LandingPageScreenStyle.root}>
        <Text style={LandingPageScreenStyle.text}>LandingPageScreen</Text>
      </View>
    </ImageBackground>
  );
};

export default LandingPageScreen;
