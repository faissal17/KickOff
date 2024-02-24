import { View, Text, Image, ScrollView, ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import CustomSearchBar from '../common/CustomSearchBar';
import { getAllPlayers } from '../../service/Api';
import { PlayerScreenStyle } from '../../styles/globalStyle';
import backround from '../../assets/images/dark.jpeg';

const PlayerScreen = () => {
  const [players, setPLayer] = useState([]);

  useEffect(() => {
    getAllPlayers()
      .then((response) => {
        setPLayer(response.data);
      })
      .catch(() => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <React.Fragment>
      <ImageBackground source={backround} style={PlayerScreenStyle.background}>
        <ScrollView>
          <View>
            <CustomSearchBar />
          </View>
          {players.map((player, index) => (
            <View style={PlayerScreenStyle.playerContainer} key={index}>
              <Image
                source={{ uri: player.image_path }}
                style={PlayerScreenStyle.playerImage}
              />
              <Text style={PlayerScreenStyle.playerName}>{player.name}</Text>
              <Text style={PlayerScreenStyle.commoName}>
                {player.common_name}
              </Text>
            </View>
          ))}
        </ScrollView>
      </ImageBackground>
    </React.Fragment>
  );
};

export default PlayerScreen;
