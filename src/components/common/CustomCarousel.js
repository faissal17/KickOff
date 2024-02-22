import { View, Text, Image, Linking } from 'react-native';
import React from 'react';
import champ from '../../assets/images/MessiChampoin.png';
import Swiper from 'react-native-swiper';
import { CustomCarouselStyle } from '../../styles/globalStyle';

const CustomCarousel = () => {
  onLeugueClick = () => {
    Linking.openURL('https://fr.uefa.com/uefachampionsleague/');
  };
  return (
    <Swiper style={CustomCarouselStyle.wrapper}>
      <View style={CustomCarouselStyle.slide}>
        <Image source={champ} style={CustomCarouselStyle.image} />
        <View style={CustomCarouselStyle.textContainer}>
          <Text style={CustomCarouselStyle.text}>
            The UEFA Champions League is an annual club football competition
            organized by the Union of European Football Associations (UEFA) and
            contested by top-division European clubs.
          </Text>
        </View>
      </View>
    </Swiper>
  );
};

export default CustomCarousel;
