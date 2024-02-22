import { View, Text, ImageBackground, ScrollView, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { MatcheScreenStyle } from '../../styles/globalStyle';
import Logo from '../../assets/images/Logo.jpeg';
import { getAllMatches, getAllLeagues } from '../../service/Api';
import CustomCarousel from '../common/CustomCarousel';

const MatcheScreen = () => {
  const [matches, setMatches] = useState([]);
  const [leugues, setLeagues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [matchesResponse, leaguesResponse] = await Promise.all([
          getAllMatches(),
          getAllLeagues(),
        ]);

        setMatches(matchesResponse.data);
        setLeagues(leaguesResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <React.Fragment>
      <ImageBackground source={Logo} style={MatcheScreenStyle.background}>
        <ScrollView style={MatcheScreenStyle.container}>
          <View  style={MatcheScreenStyle.photo}>
          <CustomCarousel />

          </View>
          {matches.map((match, index) => (
            <View key={index} style={MatcheScreenStyle.matchItem}>
              <Text style={MatcheScreenStyle.vs}>Vs</Text>
              <View style={MatcheScreenStyle.matchTextContainer}>
                <View style={MatcheScreenStyle.images}>
                  {match.participants.map((part, index) => (
                    <View key={index} style={MatcheScreenStyle.cont}>
                      <Image
                        style={MatcheScreenStyle.img}
                        source={{ uri: part.image_path }}
                      />
                      <Text style={MatcheScreenStyle.matchText1}>
                        {part.name}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </ImageBackground>
    </React.Fragment>
  );
};

export default MatcheScreen;
