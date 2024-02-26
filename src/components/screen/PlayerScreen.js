import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { getAllPlayers } from '../../service/Api';
import { PlayerScreenStyle } from '../../styles/globalStyle';
import backround from '../../assets/images/dark.jpeg';
import { useNavigation } from '@react-navigation/native';
import { CustomSearchBarStyle } from '../../styles/globalStyle';

const PlayerScreen = () => {
  const [players, setPLayer] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

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

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <React.Fragment>
      <ImageBackground source={backround} style={PlayerScreenStyle.background}>
        <View style={PlayerScreenStyle.searchContainer}>
          <View style={CustomSearchBarStyle.root}>
            <TextInput
              style={CustomSearchBarStyle.input}
              placeholder="Search Player"
              clearButtonMode="always"
              autoCapitalize="none"
              onChange={(query) => setSearchQuery(query)}
              value={searchQuery}
            />
          </View>
        </View>
        <ScrollView>
          {filteredPlayers.map((player, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => onPlayerDetail({ player })}
            >
              <View style={PlayerScreenStyle.playerContainer}>
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
