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
              style={styles.additionalInfo}
            >{`Date of Birth: ${player.date_of_birth}`}</Text>
            <Text
              style={styles.additionalInfo}
            >{`Height: ${player.height} cm`}</Text>
            <Text
              style={styles.additionalInfo}
            >{`Weight: ${player.weight} kg`}</Text>
            <Text
              style={styles.additionalInfo}
            >{`position: ${player.position.name}`}</Text>

            <View style={styles.detailsContainer}>
              <View style={styles.nationalityContainer}>
                <Text style={styles.detailsLabel}>Nationality:</Text>
                <Text style={styles.detailsValue}>
                  {player.nationality.name}
                </Text>
                <Image
                  source={{ uri: player.nationality.image_path }}
                  style={styles.flagImage}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
    marginTop: 30,
    justifyContent: 'space-between',
  },
  playerInfoContainer: {
    alignItems: 'center',
  },
  playerName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  commonName: {
    fontSize: 18,
    color: 'white',
  },
  additionalInfo: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: '90%',
    padding: 5,
    borderRadius: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 12,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nationalityContainer: {
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: '90%',
    padding: 5,
    borderRadius: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  positionContainer: {
    alignItems: 'center',
  },
  detailsLabel: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },
  detailsValue: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },
  flagImage: {
    width: 30,
    height: 20,
    marginTop: 5,
  },
});

export default PlayerDetailScreen;
