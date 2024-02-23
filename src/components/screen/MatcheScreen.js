import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { MatcheScreenStyle } from '../../styles/globalStyle';
import Logo from '../../assets/images/Logo.jpeg';
import champ from '../../assets/images/MessiChampoin.png';

import { getAllMatches, getAllLeagues } from '../../service/Api';
import CustomCarousel from '../common/CustomCarousel';
import { useNavigation } from '@react-navigation/native';

const MatcheScreen = () => {
  const [matches, setMatches] = useState([]);
  const [leugues, setLeagues] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [matchesResponse, leaguesResponse] = await Promise.all([
          getAllMatches(),
          getAllLeagues(),
        ]);

        setMatches(matchesResponse.data);
        setLeagues(leaguesResponse.data);
        //console.log(matchesResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  onDetailsSPress = ({ match }) => {
    navigation.navigate('Match Details', { match });
  };

  return (
    <React.Fragment>
      <ImageBackground source={Logo} style={MatcheScreenStyle.background}>
        <ScrollView style={MatcheScreenStyle.container}>
          <View style={MatcheScreenStyle.photo}>
            <CustomCarousel
              image={champ}
              text="The UEFA Champions League is an annual club football competition
            organized by the Union of European Football Associations (UEFA) and
            contested by top-division European clubs."
            />
          </View>
          {matches.map((match, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => onDetailsSPress({ match })}
            >
              <View key={index} style={MatcheScreenStyle.matchItem}>
                <Text style={MatcheScreenStyle.vs}>Vs</Text>
                <View style={MatcheScreenStyle.matchTextContainer}>
                  <View style={MatcheScreenStyle.images}>
                    {match.participants.map((participant, participantIndex) => (
                      <View
                        key={participantIndex}
                        style={MatcheScreenStyle.cont}
                      >
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
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ImageBackground>
    </React.Fragment>
  );
};

export default MatcheScreen;
