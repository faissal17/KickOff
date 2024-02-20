import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import { LandingPageScreenStyle } from '../../styles/globalStyle';
import Logo from '../../assets/images/background.png';
import CustomButton from '../common/CustomButton';
import { useNavigation } from '@react-navigation/native';

const LandingPageScreen = () => {
  const navigation = useNavigation();

  const onGetStartedPress = () => {
    navigation.navigate('Matches');
  };
  return (
    <React.Fragment>
      <ImageBackground source={Logo} style={LandingPageScreenStyle.background}>
        <View style={LandingPageScreenStyle.root}>
          <Text style={LandingPageScreenStyle.text}>Welcom To KickOff</Text>
          <View>
            <CustomButton
              text="Get Started"
              type="primary"
              onPress={onGetStartedPress}
            />
          </View>
        </View>
      </ImageBackground>
    </React.Fragment>
  );
};

export default LandingPageScreen;
