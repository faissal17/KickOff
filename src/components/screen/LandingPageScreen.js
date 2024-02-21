import { View, Text, ImageBackground, Image } from 'react-native';
import React from 'react';
import { LandingPageScreenStyle } from '../../styles/globalStyle';
import Logo from '../../assets/images/background.jpeg';
import custa from '../../assets/images/custa.png';
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
          <Image
            source={custa}
            resizeMode="contain"
            style={[LandingPageScreenStyle.logo, { height: 300 }]}
          />
          <View>
            <Text style={LandingPageScreenStyle.text}>Welcom To KickOff</Text>
            <Text style={LandingPageScreenStyle.secText}>
              Every match is a new chapter, every goal a thrilling plot twist.
              Stay tuned to the beautiful game with our live scores, updates,
              and the latest summer transfers. Your football journey starts
              here."
            </Text>
          </View>
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
