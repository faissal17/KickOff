import { View, Text, ImageBackground, ScrollView, Image } from 'react-native';
import React from 'react';
import Details from '../../assets/images/Details.jpeg';
import {
  MatchDetailScreenStyle,
  MatcheScreenStyle,
} from '../../styles/globalStyle';

const MatchDetailScreen = ({ route }) => {
  const { match } = route.params;

  return (
    <ImageBackground source={Details} style={MatchDetailScreenStyle.background}>
      <View>
        <ScrollView style={MatcheScreenStyle.container}>
          <View style={MatcheScreenStyle.matchItem}>
            <Text style={MatcheScreenStyle.vs}>Vs</Text>
            <View style={MatcheScreenStyle.matchTextContainer}>
              <View style={MatcheScreenStyle.images}>
                {match.participants.map((match, index) => (
                  <View key={index} style={MatcheScreenStyle.cont}>
                    <Image
                      style={MatcheScreenStyle.img}
                      source={{ uri: match.image_path }}
                    />
                    <Text style={MatcheScreenStyle.matchText1}>
                      {match.name}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default MatchDetailScreen;
