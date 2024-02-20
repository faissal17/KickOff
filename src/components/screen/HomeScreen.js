import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import CustomNavbar from '../common/CustomNavbar';

const HomeScreen = () => {
  return (
    <View style={styles.navbar}>
      <CustomNavbar />
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flex: 1,
  },
});

export default HomeScreen;
