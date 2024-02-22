import { View, Text, Image, Linking } from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import { CustomCarouselStyle } from '../../styles/globalStyle';

const CustomCarousel = ({ image, text }) => {
  onLeugueClick = () => {
    Linking.openURL('https://fr.uefa.com/uefachampionsleague/');
  };
  return (
    <Swiper style={CustomCarouselStyle.wrapper}>
      <View style={CustomCarouselStyle.slide}>
        <Image source={image} style={CustomCarouselStyle.image} />
        <View style={CustomCarouselStyle.textContainer}>
          <Text style={CustomCarouselStyle.text}>
            {text}
          </Text>
        </View>
      </View>
    </Swiper>
  );
};

export default CustomCarousel;
