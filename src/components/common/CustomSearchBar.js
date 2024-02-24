import { SafeAreaView, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import { CustomSearchBarStyle } from '../../styles/globalStyle';
import filter from 'lodash.filter';

const CustomSearchBar = () => {
  return (
    <SafeAreaView style={CustomSearchBarStyle.root}>
      <TextInput
        style={CustomSearchBarStyle.input}
        placeholder="Search Player"
        clearButtonMode="always"
        autoCapitalize="none"
        onChange={(query) => handelSearch(query)}
        value={searchQuery}
      />
    </SafeAreaView>
  );
};

export default CustomSearchBar;
