import { View, Text, StyleSheet, Image, Linking } from 'react-native';
import React from 'react';
import champ from '../../assets/images/MessiChampoin.png';
import Swiper from 'react-native-swiper';

const CustomCarousel = () => {
  onLeugueClick = () => {
    Linking.openURL('https://fr.uefa.com/uefachampionsleague/');
  };
  return (
    <Swiper style={styles.wrapper}>
      <View style={styles.slide}>
        <Image source={champ} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            The UEFA Champions League is an annual club football competition
            organized by the Union of European Football Associations (UEFA) and
            contested by top-division European clubs.
          </Text>
        </View>
      </View>
    </Swiper>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    maxHeight: 200,
    marginBottom: 20,
    borderRadius: 20,
  },
  slide: {
    flex: 1,
    alignItems: 'flex-end',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'flex-end',
  },
  textContainer: {
    position: 'absolute',
    top: 40,
    left: 15,
    maxWidth: 200,
  },
  text: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  image: {
    resizeMode: 'cover',
    width: 200,
    height: 300,
  },
});

export default CustomCarousel;
