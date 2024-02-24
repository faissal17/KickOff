import { View, Text, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import CustomSearchBar from '../common/CustomSearchBar';
import { getAllPlayers } from '../../service/Api';
import { PlayerScreenStyle } from '../../styles/globalStyle';

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
          <Text style={PlayerScreenStyle.playerAge}>{player.common_name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default PlayerScreen;
