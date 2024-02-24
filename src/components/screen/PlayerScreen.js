import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { getAllPlayers } from '../../service/Api';
import { PlayerScreenStyle } from '../../styles/globalStyle';
import backround from '../../assets/images/dark.jpeg';
import { useNavigation } from '@react-navigation/native';

const PlayerScreen = () => {
  const [players, setPLayer] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    getAllPlayers()
      .then((response) => {
        setPLayer(response.data);
      })
      .catch(() => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const onPlayerDetail = ({ player }) => {
    navigation.navigate('Player Details', { player });
  };

  return (
    <React.Fragment>
      <ImageBackground source={backround} style={PlayerScreenStyle.background}>
        <ScrollView>
          {players.map((player, index) => (
            <TouchableOpacity onPress={() => onPlayerDetail({ player })}>
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
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ImageBackground>
    </React.Fragment>
  );
};

export default PlayerScreen;
