import { View, Text, ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import { MatcheScreenStyle } from '../../styles/globalStyle';
import Logo from '../../assets/images/Logo.png';
import { getAllMatches } from '../../service/Api';

const MatcheScreen = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getAllMatches()
      .then((response) => {
        setMatches(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <React.Fragment>
      <ImageBackground source={Logo} style={MatcheScreenStyle.background}>
        <View style={MatcheScreenStyle.root}>
          {matches.map((match) => (
            <View key={match.id}>
              <Text>{match.name}</Text>
              <Text>{match.starting_at}</Text>
              <Text>{match.result_info}</Text>
            </View>
          ))}
        </View>
      </ImageBackground>
    </React.Fragment>
  );
};

export default MatcheScreen;
