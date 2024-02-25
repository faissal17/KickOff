import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { MatcheScreenStyle } from '../../styles/globalStyle';
import mucha from '../../assets/images/Mucha.jpeg';
import { PlayerScreenStyle } from '../../styles/globalStyle';
import { PlayerDetailScreenstyle } from '../../styles/globalStyle';

const PlayerDetailScreen = ({ route }) => {
  const { player } = route.params;

  return (
    <ImageBackground source={mucha} style={styles.background}>
      <ScrollView>
        <TouchableOpacity>
          <View style={PlayerScreenStyle.playerContainer}>
            <Image
              source={{ uri: player.image_path }}
              style={PlayerScreenStyle.playerImage}
            />
            <Text style={PlayerScreenStyle.playerName}>{player.name}</Text>
            <Text style={PlayerScreenStyle.commoName}>
              {player.common_name}
            </Text>
            <Text
              style={PlayerDetailScreenstyle.additionalInfo}
            >{`Date of Birth: ${player.date_of_birth}`}</Text>
            <Text
              style={PlayerDetailScreenstyle.additionalInfo}
            >{`Height: ${player.height} cm`}</Text>
            <Text
              style={PlayerDetailScreenstyle.additionalInfo}
            >{`Weight: ${player.weight} kg`}</Text>
            <Text
              style={PlayerDetailScreenstyle.additionalInfo}
            >{`position: ${player.position.name}`}</Text>

            <View style={PlayerDetailScreenstyle.detailsContainer}>
              <View style={PlayerDetailScreenstyle.nationalityContainer}>
                <Text style={PlayerDetailScreenstyle.detailsLabel}>
                  Nationality:
                </Text>
                <Text style={PlayerDetailScreenstyle.detailsValue}>
                  {player.nationality.name}
                </Text>
                <Image
                  source={{ uri: player.nationality.image_path }}
                  style={PlayerDetailScreenstyle.flagImage}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({});

export default PlayerDetailScreen;
