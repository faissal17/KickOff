import { View, Text, ImageBackground, ScrollView, Image } from 'react-native';
import React from 'react';
import Details from '../../assets/images/Details.jpeg';
import {
  MatchDetailScreenStyle,
  MatcheScreenStyle,
} from '../../styles/globalStyle';
import CustomCarousel from '../common/CustomCarousel';
import messi from '../../assets/images/10.png';

const MatchDetailScreen = ({ route }) => {
  const { match } = route.params;

  return (
    <ImageBackground source={Details} style={MatchDetailScreenStyle.background}>
      <ScrollView style={MatcheScreenStyle.container}>
        <View style={MatcheScreenStyle.photo}>
          <CustomCarousel
            image={messi}
            text="The beauty of football lies in its universal appeal, simplicity, and ability to unite people across cultures. On the pitch, it showcases skill, teamwork, and strategy, creating a captivating story with each match."
          />
        </View>

        <View style={MatcheScreenStyle.matchItem}>
          {match.image_path && <Image source={{ uri: match.image_path }} />}
          <Text style={MatcheScreenStyle.vs}>Vs</Text>
          <View style={MatcheScreenStyle.matchTextContainer}>
            <View style={MatcheScreenStyle.images}>
              {match.participants.map((participant, participantIndex) => (
                <View key={participantIndex} style={MatcheScreenStyle.cont}>
                  <Image
                    style={MatcheScreenStyle.img}
                    source={{ uri: participant.image_path }}
                  />
                  <Text style={MatcheScreenStyle.matchText1}>
                    {participant.name}
                  </Text>
                </View>
              ))}
            </View>
            <View style={MatchDetailScreenStyle.starting}>
              <Text style={MatchDetailScreenStyle.start}>
                {match.starting_at}
              </Text>
            </View>
          </View>
        </View>
        <View style={MatchDetailScreenStyle.matchTitle}>
          <Text style={MatchDetailScreenStyle.title}>{match.result_info}</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default MatchDetailScreen;
